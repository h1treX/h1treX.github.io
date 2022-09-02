const LIGHT_ICON = '<span class="material-symbols-outlined">light_mode </span>'
const DARK_ICON = '<span class="material-symbols-outlined">dark_mode</span>'

const DARK_THEME = "dark-theme", LIGHT_THEME = "light-theme";
const body = document.body;
const toggle = document.getElementById("theme-toggle");

function setTheme(darkTheme) {
  if (darkTheme) {
    body.classList.add(DARK_THEME);
    body.classList.remove(LIGHT_THEME);
    localStorage.setItem(DARK_THEME, "true");
    toggle.innerHTML = LIGHT_ICON;
  } else {
    body.classList.add(LIGHT_THEME);
    body.classList.remove(DARK_THEME);
    localStorage.setItem(DARK_THEME, "false");
    toggle.innerHTML = DARK_ICON;
  }
}

switch (localStorage.getItem(DARK_THEME)) {
  case "false":
    setTheme(false);
    break;
  case "true":
  default:
    setTheme(true)
    break;
}

function toggleTheme() {
  if (localStorage.getItem(DARK_THEME) === "true") {
    setTheme(false);
  } else {
    setTheme(true);
  }
}

toggle.onclick = toggleTheme;

