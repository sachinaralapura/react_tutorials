import React, { useState, useMemo } from "react";

export default function UseMemo1() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const incrementOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
   /*  let i = 0;
    while (i < 2000000000) i++; */
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={incrementOne}>Count one : {countOne}</button>{" "}
      <span>{isEven ? "Even" : "odd"}</span>
      <button onClick={incrementTwo}>Count Two : {countTwo}</button>
    </div>
  );
}
