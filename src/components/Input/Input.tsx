import React, { FormEvent, useRef } from 'react';
import Button from '../Button/Button';
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
        <Button text="Add task" color="#da00bd" />
      </form>
    </StyledInputWrapper>
  );
};

export default Input;
