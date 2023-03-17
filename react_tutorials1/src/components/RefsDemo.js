import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.callbackRef = null;
    this.setCbRef = (element) => {
      this.callbackRef = element;
    };
  }

  componentDidMount() {
    if (this.callbackRef) {
      this.callbackRef.focus()
    }
    //this.inputRef.current.focus();
    //console.log(this.inputRef);
  }

  clickHandler = () => {
    if(this.callbackRef){
      alert(this.inputRef.current.value + this.callbackRef.value)
    }
    
  };
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}>Concatinate</button>
      </>
    );
  }
}

export default RefsDemo;
