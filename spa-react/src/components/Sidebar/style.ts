import styled from "@emotion/styled";
import { media } from "src/ui";
import { IStylesProps } from "./types";

export const ChatsSectionSC = styled.div<IStylesProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 10px 0;
  background: rgba(255, 255, 255, 0.18);

  ${media.TABLET} {
    padding: 40px 0;
    position: absolute;

    height: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
  ${media.PHONE} {
    width: 100%;
  }
`;
