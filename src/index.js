const styles = require('./scss/index.scss');
const { game } = require('./js/game');

const playGame = () => {
  game.play();
}

window.onload = () => {
  document.getElementById('play-button').addEventListener('click', playGame);
}
