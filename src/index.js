const styles = require('./scss/index.scss');
const { game } = require('./js/game');

const playGame = () => {
  const firstPlayer = game.shoot();
  document.getElementById('first-player-hand')
          .innerHTML = firstPlayer;

  const secondPlayer = game.shoot();
  document.getElementById('second-player-hand')
          .innerHTML = secondPlayer;

  game.play(firstPlayer, secondPlayer);
}

window.onload = () => {
  document.getElementById('play-button').addEventListener('click', playGame);
}
