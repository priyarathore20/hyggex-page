import React from 'react';

const Link = ({ label = '', ...props }) => {
  return (
    <a className="text-primary-text text-lg" {...props}>
      {label}
    </a>
  );
};

export default Link;
