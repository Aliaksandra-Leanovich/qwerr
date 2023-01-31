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
    color: ${Colors.CHAT_SECONDARY};
    cursor: pointer;
  }
`;
export const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  margin-bottom: 20px;

  width: 100%;
`;

export const PictureSC = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${Colors.CHAT_SECONDARY};
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const StatusContainerSC = styled.div`
  position: absolute;
  bottom: 10;
  left: 20;
`;
