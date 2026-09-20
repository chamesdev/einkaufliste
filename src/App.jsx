import "./App.css";
import Item from "./Item";

const items = [{ name: "Banana" }, { name: "Apple" }, { name: "Orange" }];

function App() {
  return (
    <main className="app">
      <h1>Einkaufsliste</h1>
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
