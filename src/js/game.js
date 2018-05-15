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

  getWinner(firstPlayer, secondPlayer) {
    if (firstPlayer === secondPlayer) return 0;
    if (hands[firstPlayer].winsOver === secondPlayer) {
      return 1;
    } else if (hands[secondPlayer].winsOver === firstPlayer) {
      return 2;
    }
  },

  play(hand) {
    const player = typeof hand
                   === 'undefined'
                   ? this.shoot()
                   : hand;

    const computer = this.shoot();
    const winner = this.getWinner(player, computer);

    return {
      player,
      computer,
      winner
    }
  }
};


module.exports = {
  game
};
