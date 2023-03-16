import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./userContext";
class ComponentB extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        using context type {this.context}
        <ComponentC name={this.props.name}></ComponentC>
      </div>
    );
  }
}

export default ComponentB;
