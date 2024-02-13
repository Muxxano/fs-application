export default function ColorWrap({ children, color }) {
  return <div className={`color-wrap ${color}`}>{children}</div>;
}
