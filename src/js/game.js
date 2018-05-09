const _ = require('lodash');

const hands = {
  'rock': {
    winsOver: 'scissors'
  },
  'scissors': {
    winsOver: 'paper'
  },
  'paper': {
    winsOver: 'rock'
  }
}

const match = (firstPlayer, secondPlayer) => {
  if (firstPlayer === secondPlayer) return 0;
  if (hands[firstPlayer].winsOver === secondPlayer) {
    return 1;
  } else if (hands[secondPlayer].winsOver === firstPlayer) {
    return 2;
  }
}

const play = () => {
  return match(_.sample(Object.keys(hands)), _.sample(Object.keys(hands)));
}

module.exports = {
  hands,
  match,
  play
};
