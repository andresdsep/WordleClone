import clsx from 'clsx';
import React from 'react';
import { GameResultType } from '../types';

interface Props {
  result: GameResultType;
  answer: string;
  numOfGuesses: number;
  onRestart: () => void;
}

const GameResult = ({ result, answer, numOfGuesses, onRestart }: Props) =>
  result ? (
    <div className={clsx('banner', result === 'win' ? 'happy' : 'sad')}>
      {result === 'win' ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={onRestart}>Restart Game</button>
    </div>
  ) : null;

export default GameResult;
