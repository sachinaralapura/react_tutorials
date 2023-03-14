import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sachin",
    };
    //console.log("constructor")
  }

  static getDerivedStateFromProps(props, state) {
    //console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    //console.log("componentDidMount");
  }

  render() {
    //console.log("render");
    return <div>LifeCycleB</div>
  }
}

export default LifeCycleB;
