using System;
using System.Collections.Generic;
using System.Linq;

namespace rps
{
    public class Game
    {
        Dictionary<string, string> hands = new Dictionary<string, string>();
        Random random = new Random();

        public Game() {
            hands.Add("Rock", "Scissors");
            hands.Add("Scissors", "Paper");
            hands.Add("Paper", "Rock");
        }

        public string shoot()
        {
            int index = random.Next(0, hands.Keys.ToArray().Length);
            return hands.Keys.ToArray()[index];
        }

        public int getWinner(string firstPlayer, string secondPlayer) 
        {
            if (firstPlayer == secondPlayer) return 0;
            if (hands[firstPlayer] == secondPlayer) {
                return 1;
            } else if (hands[secondPlayer] == firstPlayer) {
                return 2;
            }

            return 3;
        }

        public Result play(string Player)
        {
            var player = this.shoot();

            if (Player != null) 
            {
                player = Player;
            }
            
            var computer = this.shoot();
            var winner = this.getWinner(player, computer);

            return new Result(player, computer, winner.ToString());
        }
    }
}
