import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      hoverCount: 0,
    };
  }

   clickHandler = () => {
    this.setState({count:this.state.count+1}) 
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  hoverHandler = () => {
    this.setState({count:this.state.count+1})
    this.setState((prevState) => {
      return { hoverCount: prevState.hoverCount + 1 };
    });
  }; */
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          {this.props.name} click {this.props.say} :{this.props.count}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 1);
