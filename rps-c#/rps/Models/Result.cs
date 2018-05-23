namespace rps
{
    public class Result
    {
        public string player;
        public string computer;
        public string winner;

        public Result(string Player, string Computer, string Winner)
        {
            this.player = Player;
            this.computer = Computer;
            this.winner = Winner;
        }
    }
}