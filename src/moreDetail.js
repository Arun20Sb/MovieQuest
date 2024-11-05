import { useEffect, useState } from "react";

const key = import.meta.env.VITE_OMDB_API_KEY;
console.log(key);

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
