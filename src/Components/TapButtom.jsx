export default function TapButtom({ children, onSelect, IsSelected }) {
  return (
    <li>
      <button className={IsSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
