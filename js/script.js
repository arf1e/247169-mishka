var button = document.querySelector('.main-nav__toggle');
var navBlock = document.querySelector('.main-nav__list--navigation');
var userBlock = document.querySelector('.main-nav__list--user-block');

button.addEventListener('click', function () {
  userBlock.classList.toggle('hide');
  navBlock.classList.toggle('hide');

  if (button.textContent === '+') {
    button.textContent = '-';
  }
  else {
    button.textContent = '+';
  }
})
