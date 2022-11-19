using System;
using System.Collections.Generic;
using System.ComponentModel;

#nullable disable

namespace WebAPI.Models
{
    
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; }
        public string Department { get; set; }
    }
}
