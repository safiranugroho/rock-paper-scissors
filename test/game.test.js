const { play } = require('../src/js/game');

describe('game', () => {
  it('should return the same hand if draw', () => {
    let winner = play('rock', 'rock');
    expect(winner).toBe('rock');
  });
});
