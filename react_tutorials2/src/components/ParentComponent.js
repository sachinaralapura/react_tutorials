import React, { useCallback, useState } from "react";
import Count from "./Count";
import Title from "./Title";
import Button from "./Button";

function ParentComponent() {
  const [age, setage] = useState(25);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => {
    setage(age+ 1)
  },[age])

  const incrementsalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary])

  return (
    <div>
      <Title></Title>
      <Count text="Age" count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}></Count>
      <Button handleClick={incrementsalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
