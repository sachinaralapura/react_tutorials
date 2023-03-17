import React, { Component } from "react";
import withCounter from "./withCounter";
class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          Hover {this.props.say} : {this.props.count}
        </h2>
      </div>
    );
  }
}
export default withCounter(HoverCounter, 2);
