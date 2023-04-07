import React, { useState } from "react";
const listStyle = {
  listStyle: "none",
};
function HookCounter4() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Push Item</button>
      <ul style={listStyle}>
        {items.map((item) => (
          <li key={item.id}>
            id : {item.id} value : {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter4;
