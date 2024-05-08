// const textElement = document.getElementById("text");

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;
//   const newFontSize = Math.min(scrollPosition / 5 + 2, 10); // Adjust multiplier and max size
//   textElement.style.fontSize = `${newFontSize}em`;
// });

// window.addEventListener('scroll', function () {
//     var scrollPosition = window.scrollY;
//     document.getElementById('scrollPosition').textContent = 'Scroll Position: ' + scrollPosition + 'px';
// });

window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
//   console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
//   console.log(htmlElement.scrollTop)

  htmlElement.style.setProperty(
    "--scroll",
    htmlElement.scrollTop
    // Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()
