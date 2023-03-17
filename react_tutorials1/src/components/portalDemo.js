import React from "react";
import ReactDom from "react-dom";
function PortalDemo() {
  return ReactDom.createPortal(
    <h4>portal-Demo</h4>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;