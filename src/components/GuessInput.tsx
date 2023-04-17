import React, { useState } from 'react';
import { GuessModel } from '../types';

interface Props {
  guessEntered: (guess: GuessModel) => void;
}

const GuessInput = ({ guessEntered }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    guessEntered({guess: inputValue, id: Math.random()});
    setInputValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={inputValue}
        onChange={(event) =>
          setInputValue(event.target.value.toLocaleUpperCase())
        }
      />
    </form>
  );
};

export default GuessInput;
