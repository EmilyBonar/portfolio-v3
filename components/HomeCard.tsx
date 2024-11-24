import React from 'react';
import AnimatedCard from './AnimatedCard';

interface Props {
  index: number;
  children: React.ReactNode;
}

const HomeCard: React.FC<Props> = (props) => {
  return (
    <AnimatedCard index={props.index}>
      <div className="w-full m-auto mb-4 text-gray-900 bg-white rounded shadow-lg bg-opacity-80">
        {props.children}
      </div>
    </AnimatedCard>
  );
};

export default HomeCard;
