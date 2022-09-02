const COOKIE_DIALOG_KEY = "cookieDialogClosed";

export class CookieDialogService {
  usedCookies;
  cookieDialog;

  constructor(usedCookies) {
    if (localStorage.getItem(COOKIE_DIALOG_KEY) !== "true") {
      this.usedCookies = usedCookies;
      this.cookieDialog = document.getElementById("cookie-dialog");
      const closeButton = document.createElement("span");
      closeButton.classList.add("material-symbols-outlined")
      closeButton.innerText = "close";
      closeButton.onclick = () => {
        localStorage.setItem(COOKIE_DIALOG_KEY, "true")
        this.cookieDialog.style.display = "none";
      }
      const heading = document.createElement("h3");
      heading.innerText = "This website is using cookies"
    }
  }
}

export class CookieInformation {
  name;
  description;
  origin;

  constructor(name, description, origin) {
    this.name = name;
    this.description = description;
    this.origin = origin;
  }
}
