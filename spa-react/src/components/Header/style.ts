import styled from "@emotion/styled";
import { Colors, media } from "src/ui";

export const StyledHeaderSC = styled.header`
  width: 100%;
  z-index: 5;

  position: relative;
  background-attachment: fixed;
  background-position: top center;
  background-color: transparent;

  ${media.LAPTOP} {
    background-color: ${Colors.INFODARK};
    width: 100%;
    z-index: 5;
    top: 0;
    left: 0;
    position: fixed;
  }
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;
  margin-top: 56px;
  padding: 0 100px 26px;

  ${media.LAPTOP} {
    margin-top: 26px;
  }

  ${media.TABLET} {
    padding: 0 30px 26px;
  }
`;

export const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
