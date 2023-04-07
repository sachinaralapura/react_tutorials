import React, { Component } from "react";

const withCounter = (WrappedComponent,incrementNumber) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prev) => {
        return { count: prev.count + incrementNumber  };
      });
    };

    render() {
      return (
        <WrappedComponent
          say="count"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }

  return NewComponent;
};
export default withCounter;
