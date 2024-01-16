import React from 'react';
import './index.css';
import { ReactComponent as BulbIcon } from '../../assets/bulb.svg';
import { ReactComponent as SoundIcon } from '../../assets/sound.svg';
import { ReactComponent as CaretRightIcon } from '../../assets/caret-right.svg';
import { ReactComponent as CaretLeftIcon } from '../../assets/caret-left.svg';
import { ReactComponent as FullScreenIcon } from '../../assets/full-screen.svg';
import { ReactComponent as RefreshIcon } from '../../assets/refresh-clockwise.svg';

const Quiz = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="quiz-card w-full  h-96 rounded-42.5 flex items-center justify-center text-white font-lato text-4xl relative">
        <div className="absolute top-0 w-full flex justify-between p-8">
          <BulbIcon className="cursor-pointer" />
          <SoundIcon className="cursor-pointer" />
        </div>
        9 + 6 + 7x - 2x - 3
      </div>
      <div className="w-fit mt-8 flex items-center gap-36">
        <RefreshIcon className="cursor-pointer" />
        <div className="flex gap-11 items-center">
          <CaretLeftIcon className="cursor-pointer" />
          <span className="text-quiz-text text-2xl font-bold leading-none">
            01/10
          </span>
          <CaretRightIcon className="cursor-pointer" />
        </div>
        <FullScreenIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Quiz;
