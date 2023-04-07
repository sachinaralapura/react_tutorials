import React from "react";
import "./Mystyle.css";
const heading = {
    fontSize : '20px',
    color : 'yellow',
    backgroundColor: 'tan'
}
function Style(props) {
  let className = props.primary ? "primary" : "";

  return (
    <div >
      <h3 className={`${className} fontxl`}>StyleSheet</h3>
      <h3 style={heading}>Inline style</h3>
    </div>
  );
}

export default Style;
