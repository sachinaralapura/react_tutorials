import React, { useState } from "react";
function HookCounter() {
  const [count, setCount] = useState(1);
  function set() {
    setCount(count + 1);
    /* console.log(count);
    console.log(setCount); */
  }
  return (
    <div>
      <button onClick={set}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
