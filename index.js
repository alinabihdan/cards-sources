const slides = document.querySelectorAll(".slide");

// for (const slide of slides) {
//   slide.addEventListener("click", () => {
//     clearActiveClasses();

//     slide.classList.add("active");
//   });
// }

const slideContainer = document.querySelector(".container");

slideContainer.addEventListener("click", onSlideClick);

function onSlideClick(e) {
  if (e.target.className === "slide") {
    clearActiveClasses();

    e.target.classList.add("active");
  }
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
