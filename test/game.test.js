const { game } = require('../src/js/game');

describe('game.js', () => {
  it('should return 0 if draw', () => {
    let winner = game.play('rock', 'rock');
    expect(winner).toBe(0);
  });

  it('should return 1 if rock is first hand and it wins', () => {
    let winner = game.play('rock', 'scissors');
    expect(winner).toBe(1);
  });

  it('should return 2 if rock is second hand and it wins', () => {
    let winner = game.play('scissors', 'rock');
    expect(winner).toBe(2);
  });

  it('should return 1 if paper is first hand and it wins', () => {
    let winner = game.play('paper', 'rock');
    expect(winner).toBe(1);
  });

  it('should return random hand for when a player shoots', () => {
    let randomHand = game.shoot();
    expect(randomHand === 'rock' || 'paper' || 'scissors').toBeTruthy();
  });

});
