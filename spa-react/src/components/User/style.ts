import styled from "@emotion/styled";
import { Colors } from "src/ui";

export const UserSC = styled.li`
  list-style-type: none;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: ${Colors.INFOLIGHT};

  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${Colors.SECONDARY};
    cursor: pointer;
  }
`;
export const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-bottom: 20px;

  width: 100%;
  padding: 6px;
  border-bottom: 1px solid ${Colors.SECONDARY};
`;

export const PictureSC = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${Colors.CHAT_SECONDARY};
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
`;

export const StatusContainerSC = styled.div`
  position: absolute;
  bottom: 10;
  left: 20;
`;

export const DecriptionSC = styled.p`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const MessageSC = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;

  color: ${Colors.LIGHTGRAY};
`;
