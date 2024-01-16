import React from 'react';

const Button = ({ label = '', ...props }) => {
  return (
    <button
      className="px-10 py-3 rounded-4xl text-white bg-gradient-180 from-primary-blue to-secondary-blue"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
