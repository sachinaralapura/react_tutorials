import "./App.css";
import RefsDemo from "./components/RefsDemo";
/* import Mess from "./components/Message";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import { ClassClick } from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import Conditional from "./components/Conditional";
import NameList from "./components/NameList";
import Style from "./components/StyleSheet";
import Styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo"; */
import Counter from "./components/state";
import FocusInput from "./components/FocusInput";
import PortalDemo from "./components/portalDemo";
import ClickCounter from "./components/Clickcounter";
import HoverCounter from "./components/HoverCounter";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/userContext";
function App() {
  return (
    <div className="App">
      {/*  <Mess name="city"></Mess>
      <Hello name="Kelsier" heroname="mistborn"></Hello>
      <Welcome name="Kelsier"></Welcome>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind> </EventBind>
      <ParentComponent name="sachin" />
      <Conditional></Conditional>
      <NameList></NameList>
      <Style primary={true}></Style>
      <h3 className={Styles.sucess}>CSS modules</h3>
      <Form></Form>
      <LifeCycleA name="sachin">this is mounting lifecycle</LifeCycleA>
    <FragmentDemo></FragmentDemo> */}
      <Counter></Counter>
      <RefsDemo></RefsDemo>
      <FocusInput></FocusInput>
      <PortalDemo></PortalDemo>
      <ClickCounter name="ClickCounter"></ClickCounter>
      <HoverCounter></HoverCounter>
      <UserProvider value={"using Context"}>
        <ComponentA name="by passing props through component tree"></ComponentA>
      </UserProvider>
    </div>
  );
}
export default App;
