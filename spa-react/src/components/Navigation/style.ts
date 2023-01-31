import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Colors, media } from "../../ui";

export interface IStylesProps {
  isOpen: boolean;
}

export const ContainerSC = styled.div<IStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 40px;

  ${media.LAPTOP} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    padding: 40px 0;
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const ContainerRightSC = styled.div<IStylesProps>`
  background: ${Colors.INFODARK};

  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: space-between;

  padding: 60px 30px;
  position: absolute;
  top: 0;
  right: 0;
  ${media.LAPTOP} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background: ${Colors.INFODARK};
  }
  ${media.PHONE} {
    width: 100%;
  }
  main {
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "auto")};
  }
`;
export const ContainerTopNavigationSC = styled.div`
  display: flex;
  ${media.LAPTOP} {
    display: none;
  }
`;

export const LinkSC = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${Colors.INFOLIGHT};
  cursor: pointer;

  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${Colors.INFOLIGHT};
  }
`;

export const LinkCustomSC = styled(Link)`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${Colors.INFOLIGHT};
  cursor: pointer;

  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${Colors.INFOLIGHT};
  }
`;

export const ButtonSC = styled.button`
  padding: 9px 40px;

  background: ${Colors.INFOLIGHT};
  border: 2px solid ${Colors.INFOLIGHT};
  border-radius: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${Colors.PRIMARY};

  transition: background-color 0.5s ease-out, border 0.5s ease-out;

  &:hover {
    background-color: ${Colors.LIGHTBLUE};
    border: 2px solid ${Colors.LIGHTBLUE};
  }
`;
