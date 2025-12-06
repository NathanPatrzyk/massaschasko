import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Button({
  className,
  children,
  externalLink,
  link,
  small,
  bgColor,
  isProductLink,
}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
        if (isProductLink) {
          return (
            <a href={externalLink} target="_blank">
              <button
                className={`bg-green-600 text-white font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-2 py-2 px-4 w-full hover:opacity-80 ${className}`}
              >
                {children}
              </button>
            </a>
          );
        } else if (!isProductLink) {
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
    }
  } else {
    return (
      <Link to={link}>
        <button
          className={`bg-green-600 text-white font-bold rounded-md transition ease-in-out duration-300 flex justify-center items-center gap-0 sm:gap-1 mx-auto sm:mx-0 py-2 px-2 sm:px-4 w-full sm:w-auto max-w-72 hover:opacity-80 ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  }
}
