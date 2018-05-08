const { play } = require('../src/js/game');

describe('game', () => {
  it('should return 0 if draw', () => {
    let winner = play('rock', 'rock');
    expect(winner).toBe(0);
  });
});
