import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../constants';
import { WORDS } from '../data';
import { GuessModel } from '../types';
import { range, sample } from '../utils';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState<GuessModel[]>(
    range(0, NUM_OF_GUESSES_ALLOWED).map((num) => ({ guess: '', id: num }))
  );
  const [lastGuessIndex, setLastGuessIndex] = useState(-1);

  const onGuessEntered = (guess: string) => {
    if (lastGuessIndex === NUM_OF_GUESSES_ALLOWED) return;
    const newGuessIndex = lastGuessIndex + 1;
    const newGuesses = [...guesses];
    newGuesses[newGuessIndex].guess = guess;
    setGuesses(newGuesses);
    setLastGuessIndex(newGuessIndex);
  };

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput guessEntered={onGuessEntered} />
    </div>
  );
};

export default Game;
