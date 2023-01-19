import { TextField } from "@mui/material";
import { IInputProps } from "./types";

const SearchInput = ({
  searchValue,
  handleSearch,
  placeholder,
}: IInputProps) => {
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
