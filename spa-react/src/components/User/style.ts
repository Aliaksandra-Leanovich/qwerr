import styled from "@emotion/styled";
import { Colors } from "src/ui";

export const UserSC = styled.li`
  list-style-type: none;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;

  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${Colors.BLUE};
    cursor: pointer;
  }
`;
export const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const PictureSC = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${Colors.LIGHTGRAY};
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
