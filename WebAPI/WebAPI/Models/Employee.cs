using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace WebAPI.Models
{
    
    public partial class Employee
    {

        public int EmployeeId { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }

        [Required]
        public int? Age { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public string Department { get; set; }
    }
}
