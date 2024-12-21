using Movie.WebAPI.Models;
namespace Movie.WebAPI.Interfaces
{
    public interface IMovieService
    {
        public List<Models.Movie> GetMovies(string title);
    }
}
