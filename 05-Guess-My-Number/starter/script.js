'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// console.log(document.querySelector('.message'));
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').nodeValue = 23;
// console.log(document.querySelector('.guess').nodeValue);
const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').nodeValue);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.number').textContent = 'no number !';
  }
});
