using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        static List<Models.Message> messages = new List<Models.Message>{
            new Models.Message {
                Owner = "John",
                Text = "Hello"
            },
            new Models.Message {
                Owner = "Tim",
                Text = "Hi"
            }
        };

        public IEnumerable<Models.Message> Get()
        {
            return messages;
        }
        
        [HttpPost]
        public void Post([FromBody] Models.Message message)
        {
            messages.Add(message);
        }
    }
}