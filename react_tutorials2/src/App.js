import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import DataFetch from "./components/DataFetch";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
//import IntervalHook from "./components/IntervalHook";
import MouseContainer from "./components/MouseContainer";
import UseEffect1 from "./components/useEffect1";

export const User = React.createContext();

function App() {
  return (
    <div>
      <HookCounter></HookCounter>
      <HookCounter2></HookCounter2>
      <HookCounter3></HookCounter3>
      <HookCounter4></HookCounter4>
      <UseEffect1></UseEffect1>
      <MouseContainer></MouseContainer>
      {/* <IntervalHook></IntervalHook> */}
      <DataFetch></DataFetch>
      <User.Provider value={"sachin"}>
        <ComponentA></ComponentA>
      </User.Provider>
    </div>
  );
}
export default App;
