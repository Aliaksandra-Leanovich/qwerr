import styled from "@emotion/styled";
import { media } from "src/ui";
import { IStylesProps } from "./types";

export const ChatsSectionSC = styled.div<IStylesProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 10px 30px;
  background: rgba(255, 255, 255, 0.18);

  ${media.TABLET} {
    padding: 60px 30px;
    position: absolute;

    height: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
  ${media.PHONE} {
    width: 100%;
  }
`;
