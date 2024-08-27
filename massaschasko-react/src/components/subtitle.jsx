export function Subtitle({ children, color }) {
  const colorClasses = {
    green: "text-green-600",
    white: "text-white",
  };
  return (
    <h2 className={`${colorClasses[color]} text-2xl font-bold uppercase`}>
      {children}
    </h2>
  );
}
