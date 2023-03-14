import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sachin",
    };
   // console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    //console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    //console.log("componentDidMount");
  }

  render() {
    const {children,name} = this.props
    //console.log("render");
    return (
      <div>
        {children}
        {name}
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
