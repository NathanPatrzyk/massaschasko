export function Subtitle({ children, color }) {
  return (
    <h2 className={`text-${color} text-2xl font-bold uppercase`}>{children}</h2>
  );
}
