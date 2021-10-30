using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Plarama.Models;

namespace Plarama.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class RoutineController : ControllerBase
  {
    [HttpGet]
    public IEnumerable<Routine> Get()
    {
      return new List<Routine>
      {
        new()
        {
          ID = 1, State = RoutineState.NotCompleted, Description = "Reading"
        },
        new()
        {
          ID = 2, State = RoutineState.Completed, Description = "Guitar"
        },
        new()
        {
          ID = 4, State = RoutineState.Completed, Description = "Gaming"
        },
        new()
        {
          ID = 3, State = RoutineState.NotCompleted, Description = "Learning"
        }
      };
    }
  }
}