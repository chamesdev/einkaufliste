import { useEffect, useState } from "react";
import Item from "./Item";
import "./App.css";

const startingItems = [
  { id: crypto.randomUUID(), name: "Banana", status: false, date: "" },
  { id: crypto.randomUUID(), name: "Apple", status: false, date: "" },
  { id: crypto.randomUUID(), name: "Orange", status: false, date: "" },
];

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("shopping-items");
    if (!savedItems) return startingItems;

    return JSON.parse(savedItems).map((item) => ({
      id: item.id || crypto.randomUUID(),
      name: item.name || "",
      status: item.status || false,
      date: item.date || "",
    }));
  });
  const [item, setItem] = useState({ name: "", date: "" });

  useEffect(() => {
    localStorage.setItem("shopping-items", JSON.stringify(items));
  }, [items]);

  function changeStatus(id, status) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, status: status } : item,
      ),
    );
  }

  function deleteItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function addItem() {
    if (item.name.trim() === "") return;

    setItems((currentItems) => [
      ...currentItems,
      {
        id: crypto.randomUUID(),
        name: item.name.trim(),
        status: false,
        date: item.date,
      },
    ]);
    setItem({ name: "", date: "" });
  }

  return (
    <main className="app">
      <h1>Einkaufsliste</h1>
      <h2>Item Hinzufügen</h2>
      <div className="add-item">
        <input
          type="text"
          placeholder="Produktname"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        <input
          type="date"
          value={item.date}
          onChange={(e) => setItem({ ...item, date: e.target.value })}
        />
        <button onClick={addItem}>
          Hinzufügen
        </button>
      </div>
      <h2>{items.length} Artikel</h2>
      <div>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            date={item.date}
            changeStatus={changeStatus}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
