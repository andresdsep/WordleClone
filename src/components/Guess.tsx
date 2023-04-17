import React from 'react';
import { MAX_LENGTH_OF_WORDS } from '../constants';
import { range } from '../utils';

interface Props {
  guess: string;
}

const Guess = ({ guess }: Props) => {
  const letters = guess ? guess.split('') : range(0, MAX_LENGTH_OF_WORDS).map(() => '');
  return (
    <p className="guess">
      {letters.map((letter, i) => (
        <span key={i} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
