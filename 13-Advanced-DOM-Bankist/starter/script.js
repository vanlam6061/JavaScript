'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////
/////////////////////////////////////////////////////////////c

console.log(document.documentElement);
console.log(document.body);
console.log(document.head);
const header = document.querySelector('.header');

document.querySelector();
const massage = document.createElement('div');
massage.classList.add('cookie-message');
// massage.textContent =
//   'We use cookiees for improve functionality and analytics.';
massage.innerHTML =
  'We use cookiees for improve functionality and analytics. < button class="btn--close-cookie">Got it!</button>';
header.prepend(massage);
