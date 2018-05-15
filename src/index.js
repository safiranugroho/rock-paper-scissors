const styles = require('./scss/index.scss');
const { game } = require('./js/game');

const winnerToText = (winner) => {
  return winner === 0
                ? 'It\'s a draw!'
                : winner === 1
                ? 'You won!'
                : 'Computer won!';
}

const showResult = (result) => {
  document.getElementById('first-player-hand')
          .innerHTML = result.player;
  document.getElementById('second-player-hand')
          .innerHTML = result.computer;
  document.getElementById('winner')
          .innerHTML = winnerToText(result.winner);
}

window.onload = () => {
  document.getElementById('play-button')
          .addEventListener('click', () => showResult(game.throwRandom()));

  document.getElementById('rock-button')
          .addEventListener('click', () =>
                                      showResult(game.throwRock()));

  document.getElementById('paper-button')
          .addEventListener('click', () =>
                                      showResult(game.throwPaper()));

  document.getElementById('scissors-button')
          .addEventListener('click', () =>
                                      showResult(game.throwScissors()));
}
