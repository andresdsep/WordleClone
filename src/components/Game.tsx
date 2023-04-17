import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../constants';
import { WORDS } from '../data';
import { GameResultType, GuessModel } from '../types';
import { range, sample } from '../utils';
import GameResult from './GameResult';
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
  const gameResult: GameResultType =
    guesses[lastGuessIndex]?.guess === answer
      ? 'win'
      : lastGuessIndex === NUM_OF_GUESSES_ALLOWED - 1
      ? 'lose'
      : undefined;

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput guessEntered={onGuessEntered} disableInput={!!gameResult} />
      <GameResult
        result={gameResult}
        answer={answer}
        numOfGuesses={lastGuessIndex + 1}
      />
    </div>
  );
};

export default Game;
