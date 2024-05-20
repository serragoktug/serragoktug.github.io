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
  var firstItemPositionTop = document.getElementById("first-item").offsetTop;
  var secondItemPositionTop = document.getElementById("second-item").offsetTop;
  var thirdItemPositionTop = document.getElementById("third-item").offsetTop;
  var fourthItemPositionTop = document.getElementById("fourth-item").offsetTop;
  var fifthItemPositionTop = document.getElementById("fifth-item").offsetTop;
  var sixthItemPositionTop = document.getElementById("sixth-item").offsetTop;
  var seventhItemPositionTop = document.getElementById("seventh-item").offsetTop;

  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight

  htmlElement.style.setProperty(
    "--scroll",
    htmlElement.scrollTop
  )

  if (htmlElement.scrollTop >= secondItemPositionTop-100) {
      loadContent("img-1");
  }

  if (htmlElement.scrollTop >= thirdItemPositionTop-100) {
    loadContent("evleniyoruz");
  }

  if (htmlElement.scrollTop >= fourthItemPositionTop-100) {
    loadContent("img-2");
  }

  if (htmlElement.scrollTop >= fifthItemPositionTop-100) {
    loadContent("ozel-gun");
  }

  if (htmlElement.scrollTop >= sixthItemPositionTop-100) {
    loadContent("time-1");
    loadContent("time-2");

    loadContent("location-name");
    loadContent("address-1");
    loadContent("address-2");
  }

  if (htmlElement.scrollTop >= sixthItemPositionTop+100) {
    loadContent("rsvp");
    loadContent("map");
  }

  if (htmlElement.scrollTop >= seventhItemPositionTop) {
    loadContent("img-last");
  }

  


}

function loadContent(id) {
  var contentSection = document.getElementById(id);
  contentSection.classList.add("loaded");
}


setScrollVar()