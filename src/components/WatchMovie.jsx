import React from "react";

const WatchMovie = ({ movie, onDelete }) => {
  return (
    <li
      key={movie.imdbID}
      className="relative grid grid-cols-[3rem_1fr] grid-rows- gap-x-16 items-center py-[1.6rem] px-[3.2rem] border-b-[1px] border-b-background-100 cursor-pointer text-xl max-sm:text-lg transition-all duration-[0.3s] font-sans"
    >
      <div>
        <img
          src={
            movie.poster !== "N/A"
              ? movie.poster
              : "https://image.shutterstock.com/image-vector/movie-time-hand-drawing-lettering-260nw-2380052551.jpg"
          }
          alt={movie.Title}
          className="max-w-96 w-20 h-20 row-span-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-sans text-lg w-4/6 pb-2">
          {movie.title}
        </h3>

        <div>
          <div className="text-[18px] sm:text-[16px]">
            <p className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <span>🗓️</span>
                <span>
                  {!movie.year ? "2015" : movie.year}
                </span>
              </p>
              <p className="flex items-center gap-1">
                <span>⭐</span>
                <span>{movie.imdbRating.toFixed(1)}</span>
              </p>
            </p>
            <p className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <span>🌟</span>
                <span>{movie.newRating.toFixed(1)}</span>
              </p>
              <p className="flex items-center gap-1">
                <span>⌛</span>
                <span>{movie.runtime.toFixed(1)} </span>m
              </p>
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => onDelete(movie.imdbID)}
        className="absolute right-7 top-5 h-5 aspect-square rounded-full border-none bg-red cursor-pointer transition-all duration-300 hover:bg-red-dark text-xs"
      >
        X
      </button>
    </li>
  );
};

export default WatchMovie;
