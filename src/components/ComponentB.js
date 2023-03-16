import React, { Component } from 'react'
import ComponentC from "./ComponentC"
class ComponentB extends Component {
  render() {
    return (
      <div><ComponentC name={this.props.name}></ComponentC></div>
    )
  }
}

export default ComponentB