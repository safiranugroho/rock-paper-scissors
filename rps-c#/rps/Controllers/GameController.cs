using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System.Linq;

namespace rps
{
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private readonly Game _game;

        public GameController()
        {
            _game = new Game();
        }

        [HttpPost]
        public Result Play([FromBody] string player)
        {
            return _game.play(player);
        }
    }
}