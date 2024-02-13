export default function Tabs({ buttons, children, ...props }) {
  return (
    <div {...props}>
      <menu>{buttons}</menu>
      {children}
    </div>
  );
}
