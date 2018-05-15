const styles = require('./scss/index.scss');
const { game } = require('./js/game');

const winnerToText = (winner) => {
  return winner === 0
                ? 'It\'s a draw!'
                : winner === 1
                ? 'You won!'
                : 'Computer won!';
}

const playGame = (player) => {
  const result = game.play(player);

  document.getElementById('first-player-hand')
          .innerHTML = result.player;
  document.getElementById('second-player-hand')
          .innerHTML = result.computer;
  document.getElementById('winner')
          .innerHTML = winnerToText(result.winner);
}

window.onload = () => {
  document.getElementById('play-button')
          .addEventListener('click', () => playGame());

  document.getElementById('rock-button')
          .addEventListener('click', () =>
                                      playGame('Rock'));

  document.getElementById('paper-button')
          .addEventListener('click', () =>
                                      playGame('Paper'));

  document.getElementById('scissors-button')
          .addEventListener('click', () =>
                                      playGame('Scissors'));
}
