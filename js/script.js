var button = document.querySelector('.main-nav__toggle');
var navBlock = document.querySelector('.main-nav__list--navigation');
var userBlock = document.querySelector('.main-nav__list--user-block');
var image = document.querySelector('.toggler');

/* Если у юзера включен js, нам нужно:
  1. Скрыть меню
  2. При взаимодействии тогглить класс -js
*/
navBlock.classList.add('hide');  // Скрываем меню
userBlock.classList.add('hide');
image.classList.remove('toggler--opened');  // Удаляем положение "открыто" у кнопки
image.classList.add('toggler--closed');  // И включаем положение "закрыто"

// Тогда при нажатии:
button.addEventListener('click', function () {
  // 1. Будет меняться картинка:
  image.classList.toggle('toggler--opened');
  image.classList.toggle('toggler--closed');
  // 2. Будут открываться/скрываться менюшки:
  userBlock.classList.toggle('hide');
  navBlock.classList.toggle('hide');
  // 3. ...Которые будут спозиционированы абсолютно:
  userBlock.classList.toggle('main-nav__list--user-block-js');
  navBlock.classList.toggle('main-nav__list--navigation-js');
})
