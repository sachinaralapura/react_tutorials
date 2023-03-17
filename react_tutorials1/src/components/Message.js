import React, { Component } from "react";

class Mess extends Component {
  render() {
    //const {name} = this.props        Destructuring props and state
    return (
      <div>
        <h2>Luthadel {this.props.name}</h2>
        <p>City of Lord Ruler</p>
      </div>
    );
  }
}
export default Mess;
