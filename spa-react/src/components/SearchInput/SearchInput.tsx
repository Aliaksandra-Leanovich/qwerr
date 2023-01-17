import { Input } from "@mui/material";
import { ChangeEvent } from "react";

interface IInput {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput = ({ searchValue, handleSearch, placeholder }: IInput) => {
  return (
    <Input
      placeholder={placeholder}
      value={searchValue}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
