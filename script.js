'use strict';

const score0 = document.querySelector('#score--0');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

btnroll.addEventListener('click', function () {
  // generate random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //   display dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
