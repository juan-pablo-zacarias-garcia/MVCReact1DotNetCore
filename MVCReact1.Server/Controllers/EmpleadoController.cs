using Microsoft.AspNetCore.Mvc;
using MVCReact1.Server.Models;

namespace MVCReact1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private MvcreactContext _context;
        private EmpleadoController( MvcreactContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("obtener-empleados")]
        public ActionResult<IEnumerable<Empleado>> ObtenerEmpleados()
        {
            var empleados = _context.Empleados.ToList();
            if(!empleados.Any())
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }
            return StatusCode(StatusCodes.Status200OK, empleados);
        }
    }
}
