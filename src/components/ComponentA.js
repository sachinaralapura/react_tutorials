import React, { Component } from 'react'
import ComponentB from "./ComponentB"
class ComponentA extends Component {
  render() {
    return (
      <div><ComponentB name={this.props.name}></ComponentB></div>
    )
  }
}

export default ComponentA