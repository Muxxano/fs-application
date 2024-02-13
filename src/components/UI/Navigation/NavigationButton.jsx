export default function NavigationButton({
  children,
  onSelect,
  isSelected,
  ...props
}) {
  return (
    <li>
      <button
        {...props}
        className={isSelected ? "active" : ""}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
