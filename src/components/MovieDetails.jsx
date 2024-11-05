import React from "react";
import { moreDetail } from "../moreDetail";
import Button from "./Button";
import StarRating from "./StarRating";

const MovieDetails = ({ selectedId, onAddWatch, watched, onBack }) => {
  // Fetch individual movie using custom HOOK:
  const { movie, isLoading, isError, newRating, setNewRating } =
    moreDetail(selectedId);

  const {
    Title: title = "",
    Poster: poster = "",
    Runtime: runtime = "",
    imdbRating = 0,
    Plot: plot = "",
    Released: released = "",
    Actors: actors = "",
    Director: director = "",
    Genre: genre = "",
  } = movie || {};

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.newRating;

  function handleAddToWatched() {
    const newMovie = {
      imdbID: selectedId,
      title,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      newRating,
    };
    console.log("yoyo: ", newMovie);
    onAddWatch(newMovie);
    setNewRating(0);
    onBack();
  }

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="h-full max-xl:h-[70vh] bg-background-900 flex items-center justify-center relative mx-3">
        <span className="text-xl sm:text-3xl font-semibold font-montserrat text-red-500 relative z-10">
          <div className="loader">
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="xl:w-[87vh] h-full max-xl:h-[70vh] flex items-center justify-center relative">
        <h1 className="text-center text-2xl font-bold">
          💀 Error fetching movie details. Please try again later.
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6 mt-3 h-full relative">
      {/* Movie Description Header */}
      <header className="flex my-6">
        <Button onBack={onBack} />
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://image.shutterstock.com/image-vector/movie-time-hand-drawing-lettering-260nw-2380052551.jpg"
          }
          alt={`🍿`}
          className="rounded-xl shadow-md w-1/3 h-auto object-cover"
        />

        <div className="mx-4 flex flex-col w-2/3 gap-3">
          <h2 className="text-3xl font-semibold mb-1">{title}</h2>
          <p>
            {released} | {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span> {imdbRating} IMDb rating
          </p>
        </div>
      </header>

      {/* Movie Details Section */}
      <section className="border-t border-gray-200 py-5">
        <div className="py-3 px-4 mb-3 font-semibold flex justify-center items-center">
          {!isWatched ? (
            <div className="flex flex-col">
              <StarRating maxRating={10} size={24} onSetRating={setNewRating} />
              {newRating > 0 && (
                <button
                  onClick={handleAddToWatched}
                  className="mt-3 bg-blue-600 text-white text-lg px-4 py-2 font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  + Add to List
                </button>
              )}
            </div>
          ) : (
            <p>
              You rated the movie {watchedRating} ⭐
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 font-palanquin mt-4">
          <p className="italic">{plot}</p>
          <p>Starring: {actors}</p>
          <p>
            Directed by{" "}
            <strong className="text-lg text-blue-600">{director} 🚬</strong>
          </p>
        </div>

        <div className="mt-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Watch Online:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href={`https://attackertv.so`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Attackertv
                </a>
              </li>
              <li>
                <a
                  href={`https://www.braflix.is/`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Braflix
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Download:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href={`https://themoviesverse.info/`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  MoviesVerse
                </a>
              </li>
              <li>
                <a
                  href={`https://vegamovies.fm/`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  VegaMovies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
