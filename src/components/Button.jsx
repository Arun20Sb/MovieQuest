import React from "react";
import Sound from "../assets/click.wav";

const imgurl =
  "https://img.icons8.com/?size=100&id=mw5rT44y6Eh5&format=png&color=000000";

const Button = ({ onBack }) => {
  const handleClick = () => {
    // Play sound
    new Audio(Sound).play();
    // Execute onBack function
    if (onBack) onBack();
  };

  return (
    <button
      className="text-2xl absolute top-0 right-0 m-2 focus:-translate-y-1 active:translate-y-1 focus:shadow-lg transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      <img src={imgurl} alt="hello" width={33} height={33} />
    </button>
  );
};

export default Button;
