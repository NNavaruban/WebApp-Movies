namespace Movie.WebAPI.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ReleasedYear { get; set; }
        public string PosterImage { get; set; }
    }
}
