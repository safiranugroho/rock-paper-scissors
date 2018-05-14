const hands = {
  'Rock': {
    winsOver: 'Scissors'
  },
  'Scissors': {
    winsOver: 'Paper'
  },
  'Paper': {
    winsOver: 'Rock'
  }
};

const game = {
  shoot() {
    return Object.keys(hands)[Math.floor(Math.random() * Object.keys(hands).length)];
  },

  play(firstPlayer, secondPlayer) {
    if (firstPlayer === secondPlayer) return 0;
    if (hands[firstPlayer].winsOver === secondPlayer) {
      return 1;
    } else if (hands[secondPlayer].winsOver === firstPlayer) {
      return 2;
    }
  },

  random() {
    const firstPlayer = this.shoot();
    const secondPlayer = this.shoot();
    const winner = this.play(firstPlayer, secondPlayer);

    return {
      firstPlayer,
      secondPlayer,
      winner
    }
  }
};


module.exports = {
  game
};
