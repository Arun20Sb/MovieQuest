import { useEffect, useState } from "react";

const key = import.meta.env.VITE_OMDB_API_KEY;
console.log(key);

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
