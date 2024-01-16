import React from 'react';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg';

const Accordion = ({ title }) => {
  return (
    <div className="cursor-pointer flex text-accordion-text font-semibold leading-6 justify-between px-6 py-4 border rounded-xl border-accordion-border">
      {title}
      <ArrowDownIcon />
    </div>
  );
};

export default Accordion;
