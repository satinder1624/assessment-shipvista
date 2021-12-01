using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace backend.Models
{
    public class Plant
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string waterStatus { get; set; }


        [Column(TypeName = "nvarchar(MAX)")]
        public string lastTimeWater { get; set; }

        public bool watering { get; set; }

    }
}
