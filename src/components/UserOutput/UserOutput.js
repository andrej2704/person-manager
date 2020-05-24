import React from "react";
const userOutput = props => {
  return (
    <div>
      <p>Random text</p>
      <p>Random text2</p>
      <p onClick={props.click}>{props.userName}</p>
    </div>
  );
};

export default userOutput;
