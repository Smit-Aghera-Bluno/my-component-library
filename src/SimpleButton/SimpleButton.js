import React from "react";

const SimpleButton = ({ children, onClick, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
);

export default SimpleButton;
