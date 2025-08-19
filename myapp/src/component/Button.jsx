function Button({ onClick, onAdd, onViewMore }) {
  return (
    <div>
      <button onClick={onClick}>Click</button>
      <button onClick={onAdd}>Add</button>
      <button onClick={onViewMore}>View More</button>
    </div>
  );
}

export default Button;

