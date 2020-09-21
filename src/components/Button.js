import React from 'react';

const Button = (props) => {
  return(
  <button className="bttn" onClick = {props.onButtonPress}>
    {props.children}
  </button>
  );
  };

export default Button;