import React from 'react';
import { GuessModel } from '../types';

interface Props {
  guesses: GuessModel[];
}

const GuessResults = ({ guesses }: Props) => (
  <div className="guess-results">
    {guesses.map((guess) => (
      <p key={guess.id} className="guess">
        {guess.guess}
      </p>
    ))}
  </div>
);

export default GuessResults;
