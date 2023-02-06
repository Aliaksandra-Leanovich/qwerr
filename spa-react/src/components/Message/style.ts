import styled from "@emotion/styled";
import { Colors } from "src/ui";

export const PictureSC = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${Colors.CHAT_SECONDARY};
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InfoSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;
export const NameSC = styled.p`
  font-family: "Google Sans", Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;
export const TextSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
`;

export const InfoPersonSC = styled.div`
  display: flex;
  align-items: end;
  column-gap: 8px;
`;
export const Date = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  color: ${Colors.PROGRESSLIGHT};
`;

export const ButtonSC = styled.button`
  display: none;
  border: none;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
    fill: ${Colors.LIGHTGRAY};

    transition: fill 0.3s ease-out;

    &:hover {
      fill: ${Colors.CHAT_SECONDARY};
    }
  }
`;

export const MessageSC = styled.div`
  display: flex;
  column-gap: 10px;
  color: ${Colors.INFOLIGHT};

  margin-top: 12px;

  &:hover {
    button {
      display: flex;
    }
  }
`;

export const MessageWithoutAvatarSC = styled.div`
  padding: 0 40px;
  display: flex;
  column-gap: 180px;
  color: ${Colors.INFOLIGHT};

  margin-top: 4px;

  &:hover {
    button {
      display: flex;
    }
  }
`;

export const ButtonContainerSC = styled.div`
  display: flex;

  justify-content: center;
  column-gap: 10px;
`;
