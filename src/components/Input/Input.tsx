import React, { FormEvent, useRef } from 'react';
import { StyledInputWrapper } from './Input.styles';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = (props: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTask } = props;
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current && setTask(inputRef.current.value);
  };
  return (
    <StyledInputWrapper>
      <form onSubmit={submitHandler}>
        <label htmlFor="taskInput">Decide on the task to be done:</label>
        <input id="taskInput" type="text" placeholder="Your next task will be" ref={inputRef} />
        <button>Add</button>
      </form>
    </StyledInputWrapper>
  );
};

export default Input;
