import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
/* import DataFetch from "./components/DataFetch";
 */
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
//import IntervalHook from "./components/IntervalHook";
import MouseContainer from "./components/MouseContainer";
/* import Reducer1 from "./components/Reducer1";
 */ import Reducer2 from "./components/Reducer2";
import UseEffect1 from "./components/useEffect1";
import DataFetching2 from "./components/DataFetching2";
import ParentComponent from "./components/ParentComponent";
import UseMemo1 from "./components/UseMemo1";
import UseRef1 from "./components/UseRef1";
import UseRef2 from "./components/UseRef2";
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
      {/* <DataFetch></DataFetch> */}
      <User.Provider value={"sachin"}>
        <ComponentA></ComponentA>
      </User.Provider>
      {/* <Reducer1></Reducer1> */}
      <Reducer2></Reducer2>
      <DataFetching></DataFetching>
      <DataFetching2></DataFetching2>
      <ParentComponent></ParentComponent>
      <UseMemo1></UseMemo1>
      <UseRef1> </UseRef1>
      <UseRef2></UseRef2>
    </div>
  );
}
export default App;
