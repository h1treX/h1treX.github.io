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

addEventListener("fetch", () => {
})
