export function Text({ children, color, className }) {
  const colorClasses = {
    white: "text-white",
    black: "text-zinc-900",
  };
  return <p className={`${colorClasses[color]} ${className}`}>{children}</p>;
}
