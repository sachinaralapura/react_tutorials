import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("callback value", this.state.count);
    });

    //this.setState((preState) => ({ count: prestate.count + 1 }));
  }

  incrementfive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Kills : {this.state.count}</div>
        <button onClick={() => this.increment()}>Kill</button>
      </div>
    );
  }
}
