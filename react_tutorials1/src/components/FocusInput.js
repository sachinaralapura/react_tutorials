import React, { Component } from "react";
import Input from "./Input";
import { ForwdRef } from "./Input";
export class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.ForwdRefComp = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
    //console.log(this.componentRef.current)
  };

  clickHandlerForwdRef= () => {
    this.ForwdRefComp.current.focus();
    //console.log(this.ForwdRefComp.current);
  }
  render() {
    return (
      <>
        <Input ref={this.componentRef}></Input>
        <ForwdRef ref={this.ForwdRefComp} ></ForwdRef>
        <button onClick={this.clickHandler}>click</button>
        <button onClick={this.clickHandlerForwdRef}>clickForwdRef</button>
      </>
    );
  }
}

export default FocusInput;
