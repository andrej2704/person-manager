import React from "react";

const validation = props => {
  let message = "Text too short";
  if (props.inputLength > 5) {
    message = "Text is long enough";
  }

  return (
    <div>
      {props.inputLength > 5 ? <p>long text</p> : <p>short text</p>}
      <p>{message}</p>
    </div>
  );
};

export default validation;
