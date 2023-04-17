import React from 'react';
import { GuessModel } from '../types';
import Guess from './Guess';

interface Props {
  guesses: GuessModel[];
}

const GuessResults = ({ guesses }: Props) => (
  <div className="guess-results">
    {guesses.map((guess) => (
      <Guess key={guess.id} guess={guess.guess} />
    ))}
  </div>
);

export default GuessResults;
