using System;
using Xunit;

namespace rps.Tests
{
    public class GameTest
    {
        private readonly Game _game;

        public GameTest() 
        {
            _game = new Game();
        }

        [Fact]
        public void shouldReturn0IfDraw()
        {
            var winner = _game.getWinner("Rock", "Rock");
            Assert.True(winner == 0, $"Winner should be 0 instead of {winner}");  
        }

        [Fact]
        public void shouldReturn1IfRockIsFirstAndWins()
        {
            var winner = _game.getWinner("Rock", "Scissors");
            Assert.True(winner == 1, $"Winner should be 1 instead of {winner}");
        }

        [Fact]
        public void shouldReturn2IfRockIsSecondAndWins()
        {
            var winner = _game.getWinner("Scissors", "Rock");
            Assert.True(winner == 2, $"Winner should be 2 instead of {winner}");
        }

        [Fact]
        public void shouldReturn1IfPaperIsFirstAndWins()
        {
            var winner = _game.getWinner("Paper", "Rock");
            Assert.True(winner == 1, $"Winner should be 1 instead of {winner}");
        }

        [Fact]
        public void shouldReturnRandomHandWhenShootIsCalled()
        {
            var randomHand = _game.shoot();
            
            Assert.True(randomHand == "Rock" || 
                        randomHand == "Paper" || 
                        randomHand == "Scissors");
        }
    }
}
