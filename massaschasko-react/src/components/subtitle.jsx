export function Subtitle({ children, color }) {
  const colorClasses = {
    white: "text-white",
    green: "text-green-600",
  };
  return (
    <h2 className={`${colorClasses[color]} text-2xl font-bold uppercase`}>{children}</h2>
  );
}
