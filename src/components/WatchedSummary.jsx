import React from "react";
import Button from "./Button";

const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

const WatchedSummary = ({ watched, onBack }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.newRating));
  const totalRuntime = watched.reduce((acc, movie) => acc + movie.runtime, 0);

  return (
    <div className="p-[2.2rem] px-[3.2rem] pb-[1.8rem] rounded-lg bg-background-100 shadow-md border-b-2 border-b-purple-800 w-full mb-0 flex-wrap relative">
      <Button onBack={onBack} />
      <h2 className="uppercase text-2xl mb-2.5 font-palanquin"><em>Movies you wanna watch</em></h2>
      <div className="flex items-center gap-3 md:text-lg text-md font-semibold flex-wrap">
        <p className="flex items-center gap-1">
          <span>🙂‍↔️</span>
          <span>{watched.length} movie(s)</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⭐</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⌛</span>
          <span>{totalRuntime.toFixed(2)} m</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
