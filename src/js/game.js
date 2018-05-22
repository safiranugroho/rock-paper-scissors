const request = require('request-promise');

const options = {
  method: 'POST',
  uri: 'http://localhost:5000/api/game',
  body: '',
  json: true
};

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

  async _play(player) {
    options.body = player;

      return await new Promise((resolve, reject) => {
        request(options)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
  },

  
  async throwRock() {
    return await this._play('Rock');
  },

  async throwPaper() {
    return await this._play('Paper');
  },

  async throwScissors() {
    return await this._play('Scissors');
  },

  async throwRandom() {
    return await this._play(this._shoot());
  }
};


module.exports = {
  game
};
