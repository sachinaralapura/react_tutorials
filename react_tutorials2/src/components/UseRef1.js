import React, { useRef, useEffect } from "react";

function UseRef1() {
  const inputRef = useRef(null);
  useEffect(() => {
    //console.log(inputRef.current)
    inputRef.current.focus()
  },[]);
  return <div>
    <input ref= {inputRef}></input>
        </div>;
}

export default UseRef1;