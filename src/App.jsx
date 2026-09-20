import { useState } from "react";
import Item from "./Item";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { name: "Banana" },
    { name: "Apple" },
    { name: "Orange" },
  ]);
  const [item, setItem] = useState({ name: "" });

  return (
    <main className="app">
      <h1>Einkaufsliste</h1>
      <h2>Item Hinzufügen</h2>
      <div>
        <input
          type="text"
          value={item.name}
          onChange={(e) => setItem({ name: e.target.value })}
        />
        <button
          onClick={() => {
            if (item.name.trim() !== "") {
              setItems([...items, item]);
              setItem({ name: "" });
            }
          }}
        >
          Hinzufügen
        </button>
      </div>
      <h2>{items.length} Artikel</h2>
      <div>
        {items.map((item) => (
          <Item key={item.name} name={item.name} />
        ))}
      </div>
    </main>
  );
}

export default App;
