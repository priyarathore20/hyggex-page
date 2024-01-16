import React from 'react';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const Breadcrumb = () => {
  return (
    <div className="flex items-center">
      <Home />
      <ArrowRight />
      <span className="text-secondary-text font-medium">Flashcard</span>
      <ArrowRight />
      <span className="text-secondary-text font-medium">Mathematics</span>
      <ArrowRight />
      <span className="text-primary-blue font-bold">
        Relation and Function
      </span>
    </div>
  );
};

export default Breadcrumb;
