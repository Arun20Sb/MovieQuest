import { useEffect, useState } from "react";

<<<<<<< HEAD
const key = import.meta.env.VITE_OMDB_API_KEY;
console.log(key);
=======
const key = process.env.REACT_APP_OMDB_API_KEY;
>>>>>>> ae7c646d095824a75174f80b119d675e6ca33c48

export function moreDetail(selectedId) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [newRating, setNewRating] = useState(0);

  useEffect(
    function () {
      async function showMore() {
        try {
          setIsError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
          );

          if (!res.ok) throw new Error("Something went wrong 💀.");
          const data = await res.json();

          setMovie(data);
          setIsLoading(false);
        } catch (error) {
          // console.log(error.message);
        } finally {
          setIsError("");
          setIsLoading(false);
        }
      }

      showMore();
    },
    [selectedId]
  );

  return { movie, isLoading, isError, newRating, setNewRating };
}
