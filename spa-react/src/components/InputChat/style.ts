import styled from "@emotion/styled";
import { Colors } from "src/ui";

export const FormSC = styled.form`
  width: 90%;
  height: 60px;
  padding: 0 24px 0 20px;

  border: 1px solid ${Colors.LIGHTGRAY};
  background-color: ${Colors.INFOLIGHT};
  border-radius: 240px;

  display: flex;
  column-gap: 10px;

  margin-top: 10px;
`;

export const Input = styled.input`
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  font-size: 1em;

  width: 100%;

  border-radius: 240px;

  &:focus {
    outline: none;
  }
`;

export const ButtonSC = styled.button`
  svg {
    width: 24px;

    path {
      transition: fill 0.3s ease-out;
      fill: ${Colors.LIGHTGRAY};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${Colors.BLUE};
      }
    }
  }
`;
