import React from "react";

const Movie = ({ movie, onMovieSelect }) => {
  console.log(movie);
  return (
    <li
      key={movie.imdbID}
      className="relative grid grid-cols-[3rem_1fr] grid-rows-2 gap-x-14 md:gap-x-16 items-center py-[1.6rem] px-[3.2rem] max-md:px-[1.2rem] border-b-[1px] border-b-background-100 cursor-pointer text-xl max-sm:text-lg transition-all duration-[0.3s]"
      onClick={() => onMovieSelect(movie)}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://image.shutterstock.com/image-vector/movie-time-hand-drawing-lettering-260nw-2380052551.jpg"
        }
        alt={movie.Title}
        className="max-w-96 w-20 h-20 row-span-full object-cover"
      />
      <h3 className="font-palanquin text-xl">
        {movie.Title}
      </h3>

      <div>
        <p className="flex items-center gap-3 text-md">
          <span>🗓️</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
