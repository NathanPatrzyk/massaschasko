export function Title({ children, color }) {
  return <h1 className={`text-${color} text-3xl sm:text-4xl`}>{children}</h1>;
}
