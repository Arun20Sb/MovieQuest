import Movie from "./Movie";

const MovieList = ({ movies = [], onMovieSelect }) => {
  console.log(movies);

  if (movies.length === 0) {
    return (
      <div className="text-xl sm:text-3xl font-semibold font-montserrat custom-width custom-height text-red-500 w-full flex items-center justify-center ">
        🍿 Search for Movies 🎥
      </div>
    );
  }

  return (
    <ul className="py-3 px-0 w-full h-full list-none">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onMovieSelect={onMovieSelect} />
      ))}
    </ul>
  );
};

export default MovieList;
