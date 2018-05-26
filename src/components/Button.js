import React from 'react';

const Button = ({ onClick, children }) => 
  <button
    onClick={onClick}
    className="Button"
    type="button"
  >
    {children}
  </button>

export default Button;