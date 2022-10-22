const options = {
  creatorTwitter: "h1treXCS", versionInfo: {
    number: "1.0.3", lastUpdated: new Date("Tue Jul 26 2022"),
  },
}
let steamUrl;

function init() {
  const twitterLink = document.getElementById("twitter");
  twitterLink.innerText = options.creatorTwitter;
  twitterLink.href = "https://twitter.com/" + options.creatorTwitter;

  const versionInfo = document.getElementById("version-info");
  versionInfo.innerText = `v${options.versionInfo.number} (Last updated: ${options.versionInfo.lastUpdated.toDateString()})`

  const ipInput = document.getElementById("ip-input"), pwInput = document.getElementById("pw-input");

  const inputFunction = () => {
    const buttonOutput = document.getElementById("button-output");
    if (ipInput.value) {

      const pw = pwInput.value;
      steamUrl = `steam://connect/${ipInput.value}`;
      if (pw) {
        steamUrl += `/${pw}`

      }
      //add url to href of a element
      buttonOutput.href = steamUrl;
      buttonOutput.classList.remove("d");
    } else {
      buttonOutput.classList.add("d");
      buttonOutput.href = null;

      steamUrl = null;
    }
  }

  ipInput.onchange = inputFunction
  pwInput.onchange = inputFunction
}

init();

class ConnectData {
  ip: string;
  password: string;

  constructor(ip: string, password: string) {
    this.ip = ip
    this.password = password
  }

  constructor(string: string) {
    if (string.startsWith("steam://")) {
      const splitSteamUrl = string.split("steam://", 2)[1].split("/");
      this.ip = splitSteamUrl[0]
      if (splitSteamUrl[1]) {
        this.password = splitSteamUrl[1]
      }
    } else if (string.startsWith("connect")) {
      const splitConsoleCmd = string.split(";")
      this.ip = splitConsoleCmd[0].slice(8)
      if (splitConsoleCmd[1]) {
        this.password = splitConsoleCmd[1].slice(10)
      }
    }
  }

  get steamUrl(): string {
    return `steam://${this.ip}/${this.password ? this.password : ''}`
  }

  get command(): string {
    return `connect ${this.ip}${this.password ? `; password ${this.password}` : ''}`
  }
}
