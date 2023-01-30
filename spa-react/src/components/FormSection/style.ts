import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 124px;

  ${media.TABLET} {
    margin-top: 80px;
  }
`;

export const ContainerSC = styled.div`
  max-width: 1250px;
  width: 100%;

  padding: 72px 100px;

  background-color: ${Colors.PRIMARY};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  row-gap: 50px;

  ${media.TABLET} {
    padding: 72px 60px;
  }
`;
