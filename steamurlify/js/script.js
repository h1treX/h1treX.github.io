const options = {
    creatorTwitter: "h1treXCS",
    versionInfo: {
        number: "1.0.0",
        lastUpdated: new Date("Mon Jul 25 2022"),
    },
}
let steamUrl;

const twitterLink = document.getElementById("twitter");
twitterLink.innerText = options.creatorTwitter;
twitterLink.href = "https://twitter.com/" + options.creatorTwitter;

const versionInfo = document.getElementById("version-info");
versionInfo.innerText = `v${options.versionInfo.number} (Last updated: ${options.versionInfo.lastUpdated.toDateString()})`

const ipInput = document.getElementById("ip-input"), pwInput = document.getElementById("pw-input");

const inputFunction = () => {
    if (ipInput.value) {
        const pw = pwInput.value;

        steamUrl = `steam://connect/${ipInput.value}`;
        if (pw) {
            steamUrl += `/${pw}`
        }

        //add url to href of a element
        const buttonOutput = document.getElementById("button-output");
        buttonOutput.href = steamUrl;
        buttonOutput.classList.remove("d");
    } else {
        document.getElementById("button-output").classList.add("d");
        steamUrl = null;
    }
}

ipInput.onchange = inputFunction
pwInput.onchange = inputFunction
