import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentC extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <UserConsumer>
          {(usercontext) => {
            return <h4>{usercontext}</h4>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentC;
