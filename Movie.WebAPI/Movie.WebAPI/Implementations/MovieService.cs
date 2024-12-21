using Movie.WebAPI.Interfaces;
using Movie.WebAPI.SeedData;

namespace Movie.WebAPI.Implementations
{
    public class MovieService : IMovieService
    {
        public List<Models.Movie> GetMovies(string title)
        {
            return ListOfMovies.Get().Where(m => title == null || m.Title.Contains(title,System.StringComparison.OrdinalIgnoreCase)).ToList();
        }
    }
}
