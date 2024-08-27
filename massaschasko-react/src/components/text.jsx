export function Text({ children, color }) {
  const colorClasses = {
    white: "text-white",
    black: "text-zinc-900",
  };
  return <p className={`${colorClasses[color]}`}>{children}</p>;
}
