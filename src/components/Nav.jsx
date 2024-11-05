import { useRef } from "react";
import { useKey } from "../useKey";

const Nav = ({ query, setQuery, movies }) => {
  const inputE1 = useRef(null);

  useKey("Enter", function () {
    if (inputE1.current && document.activeElement !== inputE1.current) {
      inputE1.current.focus();
      setQuery("");
    }
  });

  return (
    <header className="bg-primary shadow-lg md:rounded-xl max-sm:py-3 mx-0 px-7 py-7 mb-7 w-full font-sans">
      <nav className="flex justify-between items-center max-w-[1440px] max-md:flex-col">
        <div className="flex items-center gap-3">
          <a href="">
            <img
              src="https://img.icons8.com/?size=48&id=CurunfN7unTu&format=png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
          <h1 className="font-semibold text-white text-2xl">MovieQuest</h1>
        </div>
        <ul>
          <input
            type="text"
            value={query}
            ref={inputE1}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search movies.."
            className="max-md:my-4 px-4 py-3 rounded-lg focus:outline-none border-b-2 shadow-md text-[17px] lg:w-[37rem] mx-2 text-text bg-primary-light placeholder:text-text-dark focus:-translate-y-1 focus:shadow-lg transition-all duration-[0.3s]"
          />
        </ul>
        <p className="max-sm:mt-1 text-lg">
          Found <span className="text-green-500">{movies.length}</span>{" "}
          Result(s)
        </p>
      </nav>
    </header>
  );
};

export default Nav;
