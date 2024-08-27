export function Title({ children, color }) {
  const colorClasses = {
    white: "text-white",
    black: "text-zinc-900",
  };
  return (
    <h1 className={`${colorClasses[color]} text-3xl sm:text-4xl`}>
      {children}
    </h1>
  );
}
