import React from "react";
import Whiteboard from "./WhiteboardDisplay";

const Couches = () => {
  return (
    <div>
      <h4>You are standing by the couches.</h4>
      <button onClick={() => alert("A frog")}>Look at whiteboard</button>
      <p>
        <a href="server">Next Area</a>
      </p>
    </div>
  );
};

export default Couches;
