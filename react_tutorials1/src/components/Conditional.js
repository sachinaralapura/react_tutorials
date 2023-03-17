import React, { Component } from "react";
class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogedin: false,
    };
  }

  render() {
    // -----------------first approach -------------------
    /*  if(this.state.islogedin){
            return <div>welcome sachin </div>
        }
        else{
            return <div>welcome guest</div>
        } */
    // -----------------second approach----------------
    /* let Message
        if(this.state.islogedin){
            Message = <div>welcome sachin</div>
        }
        else {
            Message = <div>welcome guest</div>
        } */
    // ------------- third appoach ------------------
    return this.state.islogedin && ( <div> welocome sachin</div>) 
  }
}

export default Conditional;
