import React, { Component } from "react";

export default function FunctionClick() {
    function clickHandler(){
        console.log("clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>...CLICK...  </button>
        </div>
    )
}

export class ClassClick extends Component{
    clickHandler(){
        console.log("you hacked nasa")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}> Don't click me </button>
            </div>
        );
    }
}