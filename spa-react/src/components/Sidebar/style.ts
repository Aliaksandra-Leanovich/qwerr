import styled from "@emotion/styled";
import { Colors, media } from "src/ui";
import { IStylesProps } from "./types";

export const ChatsSectionSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

export const ContainerRightSC = styled.div<IStylesProps>`
  height: 100vh;

  flex-direction: column;
  justify-content: space-between;

  ${media.LAPTOP} {
    padding: 60px 30px;
    position: absolute;
    top: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background: ${Colors.LIGHTGRAY};
  }
  ${media.PHONE} {
    width: 100%;
  }
  main {
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "auto")};
  }
`;
