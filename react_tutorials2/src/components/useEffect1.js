import React, { useState, useEffect } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // useEffect Hook
  useEffect(() => {
    //console.log('document changed');
    document.title = `clicked ${count} times`;
  },[count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button onClick={() => setCount((prev) => prev + 1)}>
        clicked {count} times
      </button>
    </div>
  );
}

export default UseEffect1;
