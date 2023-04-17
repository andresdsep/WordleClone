import React, { useState } from 'react';
import { MAX_LENGTH_OF_WORDS } from '../constants';

interface Props {
  guessEntered: (guess: string) => void;
  disableInput: boolean;
}

const GuessInput = ({ guessEntered, disableInput }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    guessEntered(inputValue);
    setInputValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={disableInput}
        minLength={MAX_LENGTH_OF_WORDS}
        maxLength={MAX_LENGTH_OF_WORDS}
        pattern={`[a-zA-Z]{${MAX_LENGTH_OF_WORDS}}`}
        title={`${MAX_LENGTH_OF_WORDS} letter word`}
        value={inputValue}
        onChange={(event) =>
          setInputValue(event.target.value.toLocaleUpperCase())
        }
      />
    </form>
  );
};

export default GuessInput;
