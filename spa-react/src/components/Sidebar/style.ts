import styled from "@emotion/styled";
import { Colors, media } from "src/ui";
import { IStylesProps } from "./types";

export const ChatsSectionSC = styled.div<IStylesProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 10px 0;
  background: black;

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

export const NoChatsSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: 20px;
  font-weight: 500;

  color: ${Colors.INFOLIGHT};
`;
