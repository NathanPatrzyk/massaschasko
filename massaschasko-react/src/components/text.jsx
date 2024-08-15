export function Text({ children, color }) {
  return <p className={`text-${color}`}>{children}</p>;
}
