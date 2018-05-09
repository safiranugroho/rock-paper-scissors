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
};

const game = {
  shoot() {
    return _.sample(Object.keys(hands));
  },

  match(firstPlayer, secondPlayer) {
    if (firstPlayer === secondPlayer) return 0;
    if (hands[firstPlayer].winsOver === secondPlayer) {
      return 1;
    } else if (hands[secondPlayer].winsOver === firstPlayer) {
      return 2;
    }
  },

  play() {
    return this.match(this.shoot(), this.shoot());
  }
};


module.exports = {
  game
};
