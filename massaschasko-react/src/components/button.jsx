export function Button({ className, children, externalLink, small, bgColor }) {
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
      if (bgColor == "green") {
        return (
          <a href={externalLink} target="_blank">
            <button
              className={`bg-white text-green-700 font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-1 mx-auto sm:mx-0 py-2 px-4 w-full sm:w-auto max-w-72 hover:opacity-80 ${className}`}
            >
              {children}
            </button>
          </a>
        );
      } else if (bgColor == "black") {
        return (
          <a href={externalLink} target="_blank">
            <button
              className={`bg-green-600 text-white font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-1 mx-auto sm:mx-0 py-2 px-4 w-full sm:w-auto max-w-72 hover:opacity-80 ${className}`}
            >
              {children}
            </button>
          </a>
        );
      }
    }
  } else {
    return (
      <button
        className={`bg-green-600 text-white font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-0 sm:gap-1 mx-auto sm:mx-0 py-2 px-2 sm:px-4 w-full sm:w-auto max-w-72 hover:opacity-80 ${className}`}
      >
        {children}
      </button>
    );
  }
}
