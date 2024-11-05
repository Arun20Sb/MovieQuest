import { Box, Footer } from "./sections";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import { useMovies } from "./useMovies";
import { useState } from "react";
import MovieDetails from "./components/MovieDetails";
import WatchedSummary from "./components/WatchedSummary";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showWatchList, setShowWatchList] = useState(false);

  // Custom Hooks:
  const { movies, isLoading, isError } = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], "watched");

  // Select Movie to show details
  const handleMovieSelect = (movie) => {
    setSelectedId(movie.imdbID);
  };

  // Back to Watchlist or Movie List
  const handleBack = () => {
    if (showWatchList) {
      setSelectedId(null); // Reset selection, show MovieList on mobile
      setShowWatchList(false); // Go back to MovieList if from WatchList
    } else {
      setSelectedId(null); // Reset selection to show WatchList
      setShowWatchList(true); // Show WatchList after details on mobile
    }
  };

  // Back to MovieList from WatchList
  const handleBackToMovieList = () => {
    setShowWatchList(false);
    setSelectedId(null);
  };

  // Add movie to watchlist
  function handleAddWatch(movie) {
    setWatched((prev) => [...prev, movie]);
  }

  // Remove movie from watchlist
  function handleDelete(id) {
    setWatched((watchMovie) =>
      watchMovie.filter((movie) => movie.imdbID !== id)
    );
  }

  return (
    <main className="relative xl:p-10 py-5 px-0 bg-background-900 text-text flex flex-col justify-center items-center">
      <Nav query={query} setQuery={setQuery} movies={movies} />

      {/* Mobile View */}
      <section className="xl:hidden mt-5 mx-0 relative justify-evenly">
        {!selectedId && !showWatchList ? (
          <Box>
            <MovieList
              movies={movies}
              onMovieSelect={handleMovieSelect}
              isLoading={isLoading}
              isError={isError}
            />
          </Box>
        ) : selectedId ? (
          <Box>
            <MovieDetails
              selectedId={selectedId}
              onAddWatch={handleAddWatch}
              watched={watched}
              onBack={handleBack} // Go to WatchList on back
            />
          </Box>
        ) : (
          <Box>
            <WatchedSummary onBack={handleBackToMovieList} watched={watched} />
            <WatchList watched={watched} onDelete={handleDelete} />
          </Box>
        )}
      </section>

      {/* Desktop View */}
      <section className="hidden xl:flex mt-4 xl:custom-height xl:custom-width justify-between gap-14">
        <Box>
          <MovieList
            movies={movies}
            onMovieSelect={handleMovieSelect}
            isLoading={isLoading}
            isError={isError}
          />
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onAddWatch={handleAddWatch}
              watched={watched}
              onBack={() => setSelectedId(null)} // Only reset selection on desktop
            />
          ) : (
            <>
              <WatchedSummary
                onBack={() => setSelectedId(null)}
                watched={watched}
              />
              <WatchList watched={watched} onDelete={handleDelete} />
            </>
          )}
        </Box>
      </section>

      <section className="mt-3 pt-8 flex justify-center items-center w-full">
        <Footer />
      </section>
    </main>
  );
}
