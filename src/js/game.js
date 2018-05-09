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

const match = (firstHand, secondHand) => {
  if (firstHand === secondHand) return 0;
  if (hands[firstHand].winsOver === secondHand) {
    return 1;
  } else if (hands[secondHand].winsOver === firstHand) {
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
