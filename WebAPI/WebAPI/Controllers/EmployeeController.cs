using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OpenTracing.Tag;
using System.ComponentModel;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Tags("Employee APIs")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        
        private readonly EmployeeContext _employeeContext;

        public EmployeeController(EmployeeContext context)
        {
            _employeeContext = context;
        }

        /// <summary>
        /// Get all the employee
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IEnumerable<Employee>> GetEmployee()
        {
            return await _employeeContext.Employees.ToListAsync();
        }

        /// <summary>
        /// Get employee by ID
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById(int id)
        {
            var employee = await _employeeContext.Employees.FindAsync(id);
            return employee == null ? NotFound() : Ok(employee);
        }

        /// <summary>
        /// Create new Employee
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {
            await _employeeContext.AddAsync(employee);
            await _employeeContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployeeById), new {id = employee.EmployeeId}, employee);
        }

        /// <summary>
        /// Update Employee data
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, Employee employee)
        {
            if (id != employee.EmployeeId) return BadRequest();

            _employeeContext.Entry(employee).State = EntityState.Modified;
            await _employeeContext.SaveChangesAsync();

            return NoContent();
        }

        /// <summary>
        /// Delete Employee
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employeeToDelete = await _employeeContext.Employees.FindAsync(id);
            if(employeeToDelete == null)
            {
                return NotFound();
            }
           
            _employeeContext.Remove(employeeToDelete);
            await _employeeContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
