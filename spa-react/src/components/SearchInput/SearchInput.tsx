import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IInput {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput = ({ searchValue, handleSearch, placeholder }: IInput) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={searchValue}
      onChange={handleSearch}
    ></StyledInput>
  );
};

export default SearchInput;

const StyledInput = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  width: 50%;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgb(153, 153, 153);
  }
`;
export { StyledInput };
