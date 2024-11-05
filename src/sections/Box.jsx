const Box = ({ children }) => {
  return (
    <div className="mx-0 relative xl:rounded-xl xl:overflow-y-scroll custom-scrollbar bg-background-500 custom-height max-xl:h-full xl:w-[87vh] w-screen xl:p-4 xl:shadow-lg">
      {children}
    </div>
  );
};

export default Box;