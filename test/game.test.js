const game = require('../src/js/game');

describe('Game', () => {
  it('should return the same hand if draw', () => {
    let winner = game.play('rock', 'rock');
    expect(winner).toBe('rock');
  });
});
