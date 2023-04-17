import React from 'react';
import { MAX_LENGTH_OF_WORDS } from '../constants';
import { range } from '../utils';
import { checkGuess } from '../game-helpers';
import clsx from 'clsx';

interface Props {
  guess: string;
  answer: string;
}

const Guess = ({ guess, answer }: Props) => {
  const models =
    checkGuess(guess, answer) ??
    range(0, MAX_LENGTH_OF_WORDS).map(() => ({ letter: '', status: '' }));
  return (
    <p className="guess">
      {models.map((result, i) => (
        <span key={i} className={clsx('cell', result.status)}>
          {result.letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
