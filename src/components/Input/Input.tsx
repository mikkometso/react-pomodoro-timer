import React, { useRef } from "react";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTask } = props;
  const submitHandler = (e: any) => {
    e.preventDefault();
    inputRef.current && setTask(inputRef.current.value);
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={submitHandler}
    >
      <label htmlFor="taskInput">Decide on the task to be done:</label>
      <input
        id="taskInput"
        type="text"
        placeholder="Your next task will be"
        ref={inputRef}
      />
      <button>Add</button>
    </form>
  );
};

export default Input;
