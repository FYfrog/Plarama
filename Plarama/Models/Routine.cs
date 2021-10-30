namespace Plarama.Models
{
    public class Routine
    {
        public long ID { get; set; }

        public RoutineState State { get; set; }

        public string Description { get; set; }
    }
}