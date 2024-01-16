import classNames from 'classnames';
import React from 'react';

const Tabs = ({ tabs = {} }) => {
  return (
    <ul className="flex justify-center flex-wrap gap-10 text-secondary-text font-medium">
      {tabs.map((item, index) => (
        <li className="me-2" key={index}>
          <button
            className={classNames('text-xl inline-block p-3 leading-none', {
              'border-b-2 border-primary-blue text-primary-blue font-bold':
                item?.isActive,
            })}
          >
            {item?.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
