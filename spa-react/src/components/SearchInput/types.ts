import { ChangeEvent } from "react";

export interface IInputProps {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
