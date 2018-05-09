const styles = require('./scss/index.scss');
const { game } = require('./js/game');

const playGame = () => {
  const firstPlayer = game.shoot();
  const secondPlayer = game.shoot();

  game.play(firstPlayer, secondPlayer);
}

window.onload = () => {
  document.getElementById('play-button').addEventListener('click', playGame);
}
