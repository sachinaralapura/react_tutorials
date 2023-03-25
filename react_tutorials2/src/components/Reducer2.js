import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 1,
}; 
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state ,firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state,firstCounter: state.firstCounter - 1 };
    case "reset":
      return {...state,firstCounter:initialState.firstCounter};
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + 1 };
    case "decrement2":
      return { ...state,secondCounter: state.secondCounter - 1 };
    case "reset2":
      return { ...state,secondCounter: initialState.secondCounter  };
    default:
      return state;
  }
};
function Reducer2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>firstCounter {count.firstCounter}</h3>
      <h3>secondCounter {count.secondCounter}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset 1</button>

      <button onClick={() => dispatch({ type: "increment2" })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2" })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset2" })}>Reset 2</button>
    </div>
  );
}

export default Reducer2;
