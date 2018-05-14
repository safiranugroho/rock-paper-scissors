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

const updateHand = (text) => {
  document.getElementById('first-player-hand')
          .innerHTML = text;
}

window.onload = () => {
  document.getElementById('play-button').addEventListener('click', randomGame);

  document.getElementById('rock-button')
          .addEventListener('click', () => {
                            updateHand((document.getElementById('rock-button')).innerHTML);
  });

  document.getElementById('paper-button')
          .addEventListener('click', () => {
                            updateHand(document.getElementById('paper-button').innerHTML);
  });

  document.getElementById('scissors-button')
          .addEventListener('click', () => {
                            updateHand(document.getElementById('scissors-button').innerHTML);
  });
}
