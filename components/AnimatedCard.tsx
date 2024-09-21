import React from 'react';

interface Props {
  index: number;
  children: React.ReactNode;
}

const AnimatedCard: React.FC<Props> = (props) => {
  return (
    <div
      className={` animate-appear mb-4`}
      style={{ animationDelay: 100 * props.index + 'ms' }}
    >
      {props.children}
    </div>
  );
};

export default AnimatedCard;
