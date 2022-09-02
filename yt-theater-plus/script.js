const noParam = document.getElementById("no-param");
const urlInput = document.getElementById("url-input");
const goButton = document.getElementById("go-button");
const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const player = document.getElementById("player");
const playerFrame = document.getElementById("player-frame");
const playerChat = document.getElementById("player-chat");
const url = window.location.host.split(":")[0];
const urlParams = new URLSearchParams(window.location.search);

console.log("Hallo")

if (urlParams.has("v")) {
  console.log("has v")
  player.style.display = "block";
  playerFrame.src = `https://www.youtube.com/embed/${urlParams.get("v")}?autoplay=1`
  playerChat.src = `https://www.youtube.com/live_chat?v=${urlParams.get("v")}&embed_domain=${url}`
} else {
  console.log("has no v")
  noParam.style.display = "block";
  goButton.onclick = () => {
    let vCode;
    const value = urlInput.value;
    console.log(value)
    if (value.match(urlRegex)) {
      if (value.includes("youtu.be")) {
        const splittedUrl = value.split("/")
        vCode = splittedUrl[splittedUrl.length - 1];
      } else {
        vCode = new URLSearchParams("?" + value.split("?")[1]).get("v");
      }
    } else {
      vCode = value;
    }
    playerFrame.src = `https://www.youtube.com/embed/${vCode}?autoplay=1`
    playerChat.src = `https://www.youtube.com/live_chat?v=${vCode}&embed_domain=${url}`
    document.URL = `${document.URL.split("?")[0]}?v=${vCode}`;
    player.style.display = "block";
    noParam.style.display = "none";
  }
}
