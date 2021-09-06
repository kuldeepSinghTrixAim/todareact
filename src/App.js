import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const addItem = (event) => {
    setValue("");
    setItems([value, ...items]);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>Enter the Text To Be Entered</p>
        <textarea
          value={value}
          onChange={handleChange}
          onBlur={addItem}
        ></textarea>
      </div>
      <div>
        <ListItem items={items} />
      </div>
    </>
  );
}

export default App;
