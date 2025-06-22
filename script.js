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
const currentScore1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  document.querySelector(`.player--0`).classList.add('player--active');

  document.querySelector('.player--1').classList.remove(`player--active`);

  document.querySelector(`.player--0`).classList.remove('player--winner');

  document.querySelector('.player--1').classList.remove(`player--winner`);

  diceEl.classList.remove('hidden');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnroll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player-active');
    } else {
      switchPlayer();
    }
  }
});

btnnew.addEventListener('click', init);
