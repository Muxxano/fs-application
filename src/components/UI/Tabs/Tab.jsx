export default function Tab({
  buttonName,
  image,
  onSelect,
  isSelected,
  color,
}) {
  return (
    <li>
      <button className={isSelected ? "activeTab" : ""} onClick={onSelect}>
        <div className={`color-wrap ${color}`}>
          <img src={image} alt={`tab for ${buttonName}`} />
        </div>
        <p>{buttonName}</p>
      </button>
    </li>
  );
}
