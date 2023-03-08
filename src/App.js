import "./App.css";
import Mess from "./components/Message";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Counter from "./components/state";
import FunctionClick from "./components/FunctionClick";
import {ClassClick} from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import Conditional from "./components/Conditional"
import NameList from "./components/NameList";
function App() {
  return (
    <div className="App">
      <Mess name="city"></Mess>
      <Hello name="Kelsier" heroname="mistborn"></Hello>
      <Welcome name="Kelsier"></Welcome>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind> </EventBind>
      <ParentComponent />
      <Conditional></Conditional>
      <NameList></NameList>
    </div>
  );
}
export default App;
