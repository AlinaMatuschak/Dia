let slideIndex = 1;

showSlides(slideIndex);

function plusSlides() {
  showSlides(slideIndex += 1);
}

const prevButton = document.querySelector('.slider__button--back');

prevButton.addEventListener('click', plusSlides);

function currentSlide() {
  showSlides(slideIndex -= 1);
}

const forwardButton = document.querySelector('.slider__button--forward');

forwardButton.addEventListener('click', currentSlide);

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slider__slide');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}
