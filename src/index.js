const styles = require('./scss/index.scss');
const { game } = require('./js/game');

const getWinner = (winner) => {
  return winner === 0
                ? 'It\'s a draw!'
                : 'Player ' + winner + ' wins!';
}

const randomGame = () => {
  const result = game.random();

  document.getElementById('first-player-hand')
          .innerHTML = result.firstPlayer;
  document.getElementById('second-player-hand')
          .innerHTML = result.secondPlayer;
  document.getElementById('winner')
          .innerHTML = getWinner(result.winner);
}

const singlePlayerGame = (hand) => {
  updateFirstHand(hand);
  updateSecondHand();

  const players = getCurrentHands();
  const result = game.play(players.first, players.second);

  document.getElementById('winner')
          .innerHTML = getWinner(result);
}

const updateFirstHand = (hand) => {
  document.getElementById('first-player-hand')
          .innerHTML = hand;
}

const updateSecondHand = () => {
  document.getElementById('second-player-hand')
          .innerHTML = game.shoot();
}

const getCurrentHands = () => {
  const first = document.getElementById('first-player-hand').innerHTML;
  const second = document.getElementById('second-player-hand').innerHTML;

  return { first, second }
}

window.onload = () => {
  document.getElementById('play-button').addEventListener('click', randomGame);

  document.getElementById('rock-button')
          .addEventListener('click', () =>
                                      singlePlayerGame('Rock'));

  document.getElementById('paper-button')
          .addEventListener('click', () =>
                                      singlePlayerGame('Paper'));

  document.getElementById('scissors-button')
          .addEventListener('click', () =>
                                      singlePlayerGame('Scissors'));
}
