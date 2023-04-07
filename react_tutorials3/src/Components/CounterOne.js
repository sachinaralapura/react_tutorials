import React from "react";
import useCounter from "../CostomHooks/useCounter";
function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(12, 3);
  return (
    <div>
      <h4>COUNT - {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
