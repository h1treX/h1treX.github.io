const SCROLL_HEADER_CLASS_NAME = "scroll-header"
const PIXELS_NEEDED_FOR_ANIMATION = 5;

window.onscroll = () => {
  console.log("scroll")
  if (document.body.scrollTop > PIXELS_NEEDED_FOR_ANIMATION
    || document.documentElement.scrollTop > PIXELS_NEEDED_FOR_ANIMATION) {
    document.getElementById("header").classList.add(SCROLL_HEADER_CLASS_NAME)
  } else {
    document.getElementById("header").classList.remove(SCROLL_HEADER_CLASS_NAME)
  }
}
