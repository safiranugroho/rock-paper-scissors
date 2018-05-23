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
          .addEventListener('click', () => {
                game.throwRandom()
                        .then((result) => {
                                showResult(result);
                        })
                        .catch((error) => {
                                throw error;
                        })
          });

  document.getElementById('rock-button')
          .addEventListener('click', () => {
                game.throwRock()
                    .then((result) => {
                        showResult(result);
                    })
                    .catch((error) => {
                        throw error;
                    })
          });

  document.getElementById('paper-button')
          .addEventListener('click', () => {
                game.throwPaper()
                        .then((result) => {
                                showResult(result);
                        })
                        .catch((error) => {
                                throw error;
                        })         
          });

  document.getElementById('scissors-button')
          .addEventListener('click', () => {
                game.throwScissors()
                        .then((result) => {
                                showResult(result);
                        })
                        .catch((error) => {
                                throw error;
                        })
          });
}