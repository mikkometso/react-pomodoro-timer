import { Dispatch, SetStateAction } from "react";

export interface InputProps {
  setTask: Dispatch<SetStateAction<string>>
}