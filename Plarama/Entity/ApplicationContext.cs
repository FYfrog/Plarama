using Microsoft.EntityFrameworkCore;
using Plarama.Models;

namespace Plarama.Entity
{
  public class ApplicationContext : DbContext
  {
    public DbSet<Routine> Routines { get; set; }
    
    public ApplicationContext(DbContextOptions<ApplicationContext> options)
      : base(options)
    {
      Database.EnsureCreated();
    }
   
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=Plarama;Username=postgres;Password=20");
    }
  }
}