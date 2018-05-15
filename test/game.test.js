const { game } = require('../src/js/game');

describe('game.js', () => {
  it('should return 0 if draw', () => {
    let winner = game.getWinner('Rock', 'Rock');
    expect(winner).toBe(0);
  });

  it('should return 1 if Rock is first hand and it wins', () => {
    let winner = game.getWinner('Rock', 'Scissors');
    expect(winner).toBe(1);
  });

  it('should return 2 if Rock is second hand and it wins', () => {
    let winner = game.getWinner('Scissors', 'Rock');
    expect(winner).toBe(2);
  });

  it('should return 1 if Paper is first hand and it wins', () => {
    let winner = game.getWinner('Paper', 'Rock');
    expect(winner).toBe(1);
  });

  it('should return random hand for when a player shoots', () => {
    let randomHand = game.shoot();
    expect(randomHand === 'Rock' || 'Paper' || 'Scissors').toBeTruthy();
  });

});
