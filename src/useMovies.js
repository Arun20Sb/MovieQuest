import { useEffect, useState } from "react";

<<<<<<< HEAD
const key = import.meta.env.VITE_OMDB_API_KEY;
console.log(key);
=======
const key = process.env.REACT_APP_OMDB_API_KEY;
>>>>>>> ae7c646d095824a75174f80b119d675e6ca33c48

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong 💀.");

          const data = await res.json();

          if (data.Response === "False")
            throw new Error("🤔No such movies found!");

          setMovies(data.Search);
        } catch (error) {
          console.log(error.message);
          if (error.name !== "AbortError") setIsError(error.message);
        } finally {
          setIsError("");
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setIsError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, isError };
}
