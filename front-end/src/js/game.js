const request = require('request-promise');

const options = {
  method: 'POST',
  uri: 'http://localhost:5000/api/game',
  body: '',
  json: true
};

const game = {
  async _play(player = null) {
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
    return await this._play();
  }
};


module.exports = {
  game
};
