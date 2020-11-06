const form = document.querySelector('form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

const buttonsLearnMore = document.querySelectorAll('.learn-more');

buttonsLearnMore.forEach(button => {
  button.addEventListener('click', event => {
    document.location.href = '#about-us';
    event.preventDefault();
  });
});

const buttonApply = document.querySelector('.button-apply');

buttonApply.addEventListener('click', event => {
  document.location.href = '#contact-us';
  event.preventDefault();
});
