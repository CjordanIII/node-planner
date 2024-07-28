const Rectangle = () => {
  // TODO create a class the returns options and settings for nodes
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      value="Default"
      onClick={(e) => {
        console.log(e.target.value);
      }}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 8.25A2.25 2.25 0 0 1 7.5 6h9a2.25 2.25 0 0 1 2.25 2.25v9A2.25 2.25 0 0 1 16.5 19.5h-9A2.25 2.25 0 0 1 5.25 17.25v-9z"
        />
      </svg>
    </button>
  );
};

export default Rectangle;
