import React, { useState } from 'react';
import { WORDS } from '../data';
import { sample } from '../utils';
import GuessInput from './GuessInput';
import { GuessModel } from '../types';
import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState<GuessModel[]>([]);
  return (
    <div>
      <GuessResults guesses={guesses} />
      <GuessInput
        guessEntered={(guess) => setGuesses((curr) => [...curr, guess])}
      />
    </div>
  );
};

export default Game;
