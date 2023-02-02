import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 100px 100px 64px;

  ${media.LAPTOP} {
    padding: 120px 30px 30px 30px;
  }

  ${media.TABLET} {
    padding: 100px 30px 30px 30px;
  }
`;
export const ContainerWithTwoBlocksSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-gap: 140px;

  margin-bottom: 56px;

  ${media.LAPTOP} {
    grid-template-columns: 1fr;
    grid-gap: 0;
    row-gap: 30px;

    display: flex;
    flex-direction: column;
  }
`;
export const CanvasContainerSC = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${media.LAPTOP} {
    display: none;
  }
`;
export const ContainerDescriptionSC = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  max-width: 568px;
  width: 100%;

  row-gap: 16px;
  z-index: 4;

  ${media.LAPTOP} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  ${media.TABLET} {
    text-align: left;
    align-self: flex-start;
  }
`;

export const WrapperSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  position: relative;

  ${media.LAPTOP} {
    background-color: ${Colors.INFODARK};
  }
`;
export const MainContainerSC = styled.section`
  margin: 0 auto;
  width: 100%;

  position: relative;
`;

export const CircleSC = styled.div`
  position: absolute;
  z-index: -2;
  opacity: 0.3;

  top: -1120px;
  right: 0px;
  left: 777px;
  top: -789px;

  width: 1293px;
  height: 1293px;

  border-radius: 50%;
  background: #1c3d5b;
`;

export const ContainerButtonsSC = styled.div`
  display: flex;
  column-gap: 24px;

  margin-top: 24px;

  ${media.LAPTOP} {
    align-self: center;
  }

  ${media.TABLET} {
    flex-direction: column;
    row-gap: 20px;
    align-self: flex-start;
  }
`;
