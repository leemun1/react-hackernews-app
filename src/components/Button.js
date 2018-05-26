import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick, children }) => 
  <button
    onClick={onClick}
    className="Button"
    type="button"
  >
    {children}
  </button>

export default Button;