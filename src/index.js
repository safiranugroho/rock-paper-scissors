const styles = require('./scss/index.scss');
const { game } = require('./js/game');

const randomGame = () => {
  const result = game.random();

  document.getElementById('first-player-hand')
          .innerHTML = result.firstPlayer;
  document.getElementById('second-player-hand')
          .innerHTML = result.secondPlayer;
  document.getElementById('winner')
          .innerHTML = getWinner(result.winner);
}

const singlePlayerGame = (player) => {
  const computer = game.shoot();
  const result = game.play(player, computer);

  document.getElementById('first-player-hand')
          .innerHTML = player;
  document.getElementById('second-player-hand')
          .innerHTML = computer
  document.getElementById('winner')
          .innerHTML = getWinner(result);
}

const getWinner = (winner) => {
  return winner === 0
                ? 'It\'s a draw!'
                : winner === 1 ?
                'You won!'
                : 'Computer won!';
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
