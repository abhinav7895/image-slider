let slider = document.querySelector("[data-slider]");
let currentSlide = 0;
const totalSlides = slider.querySelectorAll(".wrapper .bottom > div").length - 1;

slider.querySelector('[data-left-click]').addEventListener("click", function () {
  if (currentSlide == 0) {
    return;
  }
  currentSlide--;
  slider.querySelector("[data-description]").style.marginTop = `${
    currentSlide * -40
  }vh`;
  slider.querySelector("[data-images]").style.marginTop = `${
    (totalSlides - currentSlide) * -60
  }vh`;
});

slider.querySelector("[data-right-click]").addEventListener("click", function () {
  if (currentSlide == totalSlides) {
    return;
  }
  currentSlide++;
  slider.querySelector("[data-description]").style.marginTop = `${
    currentSlide * -40
  }vh`;
  slider.querySelector("[data-images]").style.marginTop = `${
    (totalSlides - currentSlide) * -60
  }vh`;
});
