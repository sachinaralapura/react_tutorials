import React, { useEffect, useState } from "react";

function IntervalHook() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(prev => prev+1.0);
  };

  useEffect(() => {
    const interval = setInterval(tick, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}

export default IntervalHook;
