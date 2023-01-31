import styled from "@emotion/styled";
import { Colors, media } from "src/ui";
import { IStylesProps } from "../Sidebar/types";

export const ChatsSectionSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerMessagesSC = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  row-gap: 20px;

  overflow-y: scroll;
  height: calc(100% - 80px);
`;

export const ChatSectionSC = styled.div<IStylesProps>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-left: 1px solid ${Colors.CHAT_SECONDARY};

  padding: 0 40px;

  overflow: hidden;

  ${media.TABLET} {
    border-left: 0;
    display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  }
`;

export const WrapperSC = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 100px 0; */
  background: ${Colors.INFODARK};
`;

export const ContainerSC = styled.div`
  /* width: 100%;
  max-width: 1400px;
  height: 100%; */
  /* padding: 100px 0; */
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  /* border-radius: 20px; */
  /* background: rgba(255, 255, 255, 0.18); */

  /* padding: 10px; */
`;

export const ContainerChatSC = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 3fr;

  overflow: hidden;
  height: 100%;
  position: relative;

  ${media.TABLET} {
    grid-template-columns: 1fr;
  }
`;

export const SelectContsinerSC = styled.div<IStylesProps>`
  width: 100;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;

  border-left: 1px solid ${Colors.CHAT_SECONDARY};

  ${media.TABLET} {
    border-left: 0;
    display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  }
`;

export const TextSC = styled.p`
  color: ${Colors.CHAT_SECONDARY};

  font-size: 36px;
  line-height: 40px;
  font-weight: 300;
`;

export const ImageSC = styled.div`
  svg {
    width: 44px;

    path {
      fill: ${Colors.CHAT_SECONDARY};
    }
  }
`;
