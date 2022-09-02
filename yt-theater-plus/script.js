const noParam = document.getElementById("no-param");
const urlInput = document.getElementById("url-input");
const goButton = document.getElementById("go-button");
const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_+.~#?&\/=]*$/;

const player = document.getElementById("player");
const playerFrame = document.getElementById("player-frame");
const playerChat = document.getElementById("player-chat");
const url = window.location.host.split(":")[0];
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("v") && urlParams.get("v") !== "") {
  player.style.display = "block";
  playerFrame.src = `https://www.youtube.com/embed/${urlParams.get("v")}?autoplay=1`
  playerChat.src = `https://www.youtube.com/live_chat?v=${urlParams.get("v")}&embed_domain=${url}`
} else {
  noParam.style.display = "block";
  goButton.onclick = () => {
    let vCode;
    const value = urlInput.value;
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
    window.location.replace(`${document.URL.split("?")[0]}?v=${vCode}`);
  }
}
