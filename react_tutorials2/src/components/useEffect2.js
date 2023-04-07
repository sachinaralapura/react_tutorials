import React, { useState, useEffect } from "react";

function UseEffect2() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const logMousePos = (e) => {
    //console.log("Mouse event")
    setx(e.clientX);
    sety(e.clientY);
  };

  useEffect(() => {
    //console.log("component mounted");
    window.addEventListener("mousemove", logMousePos);
    //ComponentWillUnmount lifecyle method using Hooks
    return () => {
      //console.log("component unmounted");
      window.removeEventListener("mousemove", logMousePos);
    };
  }, []);

  return (
    <>
      <div>
        Mouse posistion <br></br>X : {x} <br></br>Y : {y}
      </div>
    </>
  );
}

export default UseEffect2;
