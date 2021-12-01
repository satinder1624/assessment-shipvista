using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class PlantDBContext: DbContext
    {
        public PlantDBContext(DbContextOptions<PlantDBContext> options) : base(options)
        {

        }

        public DbSet<Plant> DCandidates { get; set; }
    }
}
