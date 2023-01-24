import styled from "@emotion/styled";
import { Colors } from "src/ui";

export const ChatsSectionSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextSC = styled.p`
  color: black;
  align-self: center;

  font-size: 24px;
  line-height: 26px;
  font-weight: 300;
`;
export const ContainerMessagesSC = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  row-gap: 20px;

  overflow-y: scroll;
  height: calc(100% - 80px);
`;

export const ChatSectionSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-left: 1px solid ${Colors.LIGHTGRAY};

  padding: 0 40px;

  overflow: hidden;
`;

export const ImageContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
  svg {
    width: 50px;

    path {
      fill: ${Colors.BLUE};
    }
  }
`;

export const WrapperSC = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: #ededed;
`;

export const ContainerSC = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80%;

  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 3fr;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  background-color: ${Colors.INFOLIGHT};

  padding: 10px;

  overflow: hidden;
`;
