import React, { useState } from "react";
import UseEffect2 from "./useEffect2";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Mouse position</button>
      {display && <UseEffect2></UseEffect2>}
    </div>
  );
}

export default MouseContainer;
