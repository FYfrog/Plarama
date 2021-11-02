using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Plarama.Entity;
using Plarama.Models;

namespace Plarama.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class RoutineController : ControllerBase
  {
    private readonly ApplicationContext _dbContext;

    public RoutineController(ApplicationContext dbContext)
    {
      _dbContext = dbContext;
    }
    
    [HttpGet]
    public IEnumerable<Routine> Get([FromQuery]DateTime date)
    {
      var routines = _dbContext.Routines.ToList();
      
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