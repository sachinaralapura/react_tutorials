import React, { useState } from "react";

function HookCounter2() {
  const initial = 0;
  const [count, setCount] = useState(initial);
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      <button onClick={() => setCount(initial)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={increment5}>Increment 5</button>
      <br />
      Count : {count}
    </div>
  );
}

export default HookCounter2;
