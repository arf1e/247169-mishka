var button = document.querySelector('.main-nav__toggle');
var navBlock = document.querySelector('.main-nav__list--navigation');
var userBlock = document.querySelector('.main-nav__list--user-block');
var image = document.querySelector('.toggler');
var header = document.querySelector('.page-header');

/* Если у юзера включен js, нам нужно:
  1. Скрыть меню
  2. При взаимодействии тогглить класс -js
*/
header.classList.add('page-header--js');
navBlock.classList.remove('main-nav__list--navigation-nojs');
userBlock.classList.remove('main-nav__list--user-block-nojs');
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
});

// Карта:

function initMap() {
  var uluru = {lat: 59.9387161, lng: 30.3229502};
  var map = new google.maps.Map(document.querySelector('.contacts__map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker ({
    position: uluru,
    map: map,
    icon: "../img/icon-map-pin.svg"
  });
}

// Попап:

var modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  proceedBtn = document.querySelector('.btn--proceed');

function hideModal() {
  if (overlay.classList.contains('overlay--shown')) {
    overlay.classList.remove('overlay--shown');
  }
  if (modal.classList.contains('modal--shown')) {
    modal.classList.remove('modal--shown');
  }
}

proceedBtn.addEventListener('click', function (event) {
  event.preventDefault();
  overlay.classList.add('overlay--shown');
  modal.classList.add('modal--shown');
});

overlay.addEventListener('click', function () {
  hideModal();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    hideModal();
  }
});
