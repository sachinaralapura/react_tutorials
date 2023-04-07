import React, { useState, useEffect } from "react";

function UseRef2() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{timer}</div>;
}

export default UseRef2;
