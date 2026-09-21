function Item({ id, name, status, date, changeStatus, deleteItem }) {
  return (
    <div className={`item ${status ? "bought" : ""}`}>
      <label className="item-info">
        <input
          type="checkbox"
          checked={status}
          onChange={(event) => changeStatus(id, event.target.checked)}
        />
        <span>{name}</span>
        {date && <small>{date}</small>}
      </label>
      <button type="button" onClick={() => deleteItem(id)}>
        Löschen
      </button>
    </div>
  );
}

export default Item;
