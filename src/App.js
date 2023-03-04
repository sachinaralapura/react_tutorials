import "./App.css";
import Mess from "./components/Message";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Counter from "./components/state";
import FunctionClick from "./components/FunctionClick";
import {ClassClick} from "./components/FunctionClick";
import EventBind from "./components/EventBind";
function App() {
  return (
    <div className="App">
      <Mess name="city"></Mess>
      <Hello name="sachin" heroname="mistborn"></Hello>
      <Welcome name="Kelsier"></Welcome>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind> </EventBind>
    </div>
  );
}
export default App;
