using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Movie.WebAPI.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Movie.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieService _movieService;
        public MoviesController(IMovieService movieService)
        {
            _movieService = movieService;
        }
        // GET: api/<MoviesController>
        [HttpGet]
        public IActionResult Get(string? s, string apikey)
        {
            if(String.IsNullOrEmpty(apikey))
            {
                return Unauthorized("UnAuthorized -Access denide due to the Invalid API key");
            }
            var lstMovies = _movieService.GetMovies(s);

            return Ok(lstMovies);
        }

       
    }
}
