import styled from "@emotion/styled";
import { Colors } from "src/ui";

export const FormSC = styled.form`
  width: 98%;
  height: 60px;
  padding: 0 24px 0 20px;

  border: 1px solid ${Colors.INFODARK};
  background: ${Colors.GRAY};
  border-radius: 240px;

  display: flex;
  column-gap: 10px;

  margin-top: 10px;
`;

export const Input = styled.input`
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  color: ${Colors.INFOLIGHT};

  width: 100%;
  background: ${Colors.GRAY};

  border-radius: 240px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${Colors.INFOLIGHT};
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
        fill: ${Colors.CHAT_SECONDARY};
      }
    }
  }
`;
