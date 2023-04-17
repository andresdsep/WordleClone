import React from 'react';
import { GameResultType } from '../types';

interface Props {
  result: GameResultType;
  answer: string;
  numOfGuesses: number;
}

const GameResult = ({ result, answer, numOfGuesses }: Props) =>
  result === 'win' ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.
      </p>
    </div>
  ) : result === 'lose' ? (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  ) : null;

export default GameResult;
