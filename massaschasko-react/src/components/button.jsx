export function Button({ className, children, externalLink }) {
  if (externalLink) {
    return (
      <a href={externalLink} target="_blank">
        <button
          className={`bg-white text-green-700 font-bold rounded-md flex justify-center items-center gap-1 py-[10px] px-[10px] ${className}`}
        >
          {children}
        </button>
      </a>
    );
  } else {
    return null;
  }
}
