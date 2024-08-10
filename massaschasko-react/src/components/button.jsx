export function Button({ className, children, externalLink, small }) {
  if (externalLink) {
    if (small) {
      return (
        <a href={externalLink} target="_blank">
          <button
            className={`bg-white text-green-700 font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-1 py-[10px] px-[10px] hover:opacity-80 ${className}`}
          >
            {children}
          </button>
        </a>
      );
    } else if (!small) {
      return (
        <a href={externalLink} target="_blank">
          <button
            className={`bg-white text-green-700 font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-1 py-2 px-4 hover:opacity-80 ${className}`}
          >
            {children}
          </button>
        </a>
      );
    }
  } else {
    return (
      <button
        className={`bg-green-600 text-white font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-1 py-2 px-4 hover:opacity-80 ${className}`}
      >
        {children}
      </button>
    );
  }
}
