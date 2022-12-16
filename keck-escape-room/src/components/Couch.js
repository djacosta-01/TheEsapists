import React from "react";

const Couches = () => {
  return (
    <div id="right-sidebar">
      <h4>You are standing by the couches.</h4>
      <button onClick={() => alert("A frog")}>Look at whiteboard</button>
      <p className="links">
        <a id="next-link" href="server">
          Next Area
        </a>
      </p>
    </div>
  );
};

export default Couches;
