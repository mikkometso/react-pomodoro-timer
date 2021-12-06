import React, { FormEvent, useRef } from 'react';
import { StyledInputWrapper } from './Input.styles';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTask } = props;
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current && setTask(inputRef.current.value);
  };
  return (
    <StyledInputWrapper>
      <form onSubmit={submitHandler}>
        <label htmlFor="taskInput">Add the task you will be working on</label>
        <input id="taskInput" type="text" placeholder="Add new task" ref={inputRef} />
        <button>Add task</button>
      </form>
    </StyledInputWrapper>
  );
};

export default Input;
