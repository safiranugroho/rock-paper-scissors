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
  _shoot() {
    return Object.keys(hands)[Math.floor(Math.random() * Object.keys(hands).length)];
  },

  _getWinner(firstPlayer, secondPlayer) {
    if (firstPlayer === secondPlayer) return 0;
    if (hands[firstPlayer].winsOver === secondPlayer) {
      return 1;
    } else if (hands[secondPlayer].winsOver === firstPlayer) {
      return 2;
    }
  },

  _play(player) {
    const computer = this._shoot();
    const winner = this._getWinner(player, computer);

    return {
      player,
      computer,
      winner
    }
  },

  throwRock() {
    return this._play('Rock');
  },

  throwPaper() {
    return this._play('Paper');
  },

  throwScissors() {
    return this._play('Scissors');
  },

  throwRandom() {
    return this._play(this._shoot());
  }
};


module.exports = {
  game
};
