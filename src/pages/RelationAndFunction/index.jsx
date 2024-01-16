import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Tabs from '../../components/Tabs';
import Quiz from '../../components/Quiz';
import { ReactComponent as PublishedByLogo } from '../../assets/published-by-logo.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import Accordion from '../../components/Accordion';

const tabs = [
  {
    label: 'Study',
    isActive: true,
  },
  {
    label: 'Quiz',
    isActive: false,
  },
  {
    label: 'Test',
    isActive: false,
  },
  {
    label: 'Game',
    isActive: false,
  },
  {
    label: 'Others',
    isActive: false,
  },
];

const accordions = [
  {
    label: 'Can education flashcards be used for all age groups?',
  },
  {
    label: 'How do education flashcards work?',
  },
  {
    label: 'Can education flashcards be used for test preparation?',
  },
];

const RelationAndFunction = () => {
  return (
    <div className="py-9 px-5 pb-40 max-w-1272 mx-auto">
      <Breadcrumb />
      <h1 className="mt-16 text-32 font-montserrat font-bold bg-gradient-180 from-primary-blue to-secondary-blue inline-block text-transparent bg-clip-text">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="flex flex-col items-center mt-11">
        <Tabs tabs={tabs} />

        <div className="w-full max-w-3xl mt-8">
          <Quiz />
        </div>
      </div>
      <div className="w-full mt-12 flex justify-between items-center">
        <PublishedByLogo />
        <div className="flex gap-2 items-center cursor-pointer">
          <PlusIcon />
          <span className="font-semibold text-28 bg-gradient-180 from-primary-blue to-secondary-blue inline-block text-transparent bg-clip-text">
            Create Flashcard
          </span>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-5xl font-bold bg-gradient-180 from-primary-blue to-secondary-blue inline-block text-transparent bg-clip-text">
          FAQ
        </h2>
        <div className="mt-12 flex flex-col gap-8 max-w-4xl">
          {accordions.map((item, i) => (
            <Accordion key={i} title={item?.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelationAndFunction;
