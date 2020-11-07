import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/components/button.css';

interface ButtonProps {
  to: string;
}

const Button: React.FC<ButtonProps> = ({ to }) => {
  return (
    <div className="button-container">
      <Link to={to}>Next</Link>
    </div>
  );
};

export default Button;
