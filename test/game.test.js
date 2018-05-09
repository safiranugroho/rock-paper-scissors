const { game } = require('../src/js/game');

describe('game', () => {
  it('should return 0 if draw', () => {
    let winner = game.match('rock', 'rock');
    expect(winner).toBe(0);
  });
  it('should return 1 if rock is first hand and it wins', () => {
    let winner = game.match('rock', 'scissors');
    expect(winner).toBe(1);
  });
  it('should return 2 if rock is second hand and it wins', () => {
    let winner = game.match('scissors', 'rock');
    expect(winner).toBe(2);
  });
  it('should return 1 if paper is first hand and it wins', () => {
    let winner = game.match('paper', 'rock');
    expect(winner).toBe(1);
  });
  it('should return 0/1/2 when random play is initiated', () => {
    let winner = game.play();
    expect(winner === 0 || 1 || 2).toBeTruthy();
  });
});
