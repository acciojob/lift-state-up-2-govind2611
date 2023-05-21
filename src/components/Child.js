import React from "react";

function Child(props) {
  return (
    <div class="child">
      <h2>Child Component</h2>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
    </div>
  );
}

export default Child;