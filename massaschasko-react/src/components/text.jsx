export function Text({ children, color, className }) {
  const colorClasses = {
    white: "text-white",
  };
  return (
    <div className={`${colorClasses[color]} ${className}`}>{children}</div>
  );
}
