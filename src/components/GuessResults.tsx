import React from 'react';
import { GuessModel } from '../types';
import Guess from './Guess';

interface Props {
  guesses: GuessModel[];
  answer: string;
}

const GuessResults = ({ guesses, answer }: Props) => (
  <div className="guess-results">
    {guesses.map((guess) => (
      <Guess key={guess.id} guess={guess.guess} answer={answer} />
    ))}
  </div>
);

export default GuessResults;
