import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface IInput {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput = ({ searchValue, handleSearch, placeholder }: IInput) => {
  return (
    <TextField
      id="outlined-size-small"
      size="small"
      sx={{ width: "250px" }}
      label={placeholder}
      value={searchValue}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
