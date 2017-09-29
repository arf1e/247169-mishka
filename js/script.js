const button = document.querySelector('.main-nav__toggle'),
      list = document.querySelector('.main-nav__container');

button.addEventListener('click', () => {
  list.classList.toggle('hide');
  if (button.textContent === '+') {
    button.textContent = '-';
  }
  else {
    button.textContent = '+';
  }
});
