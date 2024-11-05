import WatchMovie from "./WatchMovie";

const imgUrl =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D";

const WatchList = ({ watched, onDelete }) => {
  if (watched.length === 0) {
    return (
      <div className="xl:w-[87vh] h-full max-xl:h-[70vh] flex justify-center ">
        <span className="text-xl sm:text-3xl font-semibold font-sans mt-28 mr-7 text-center">
         👀 Add movies 🚀 
        </span>
      </div>
    );
  }
  return (
    <ul
      className={`py-3 px-0 w-full h-full list-none`}
    >
      {watched.map((movie) => (
        <WatchMovie movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default WatchList;
