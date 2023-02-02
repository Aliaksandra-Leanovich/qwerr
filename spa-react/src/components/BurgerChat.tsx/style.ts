import styled from "@emotion/styled";
import { media } from "../../ui";
import { IStylesProps } from "./types";

export const StyledBurger = styled.button<IStylesProps>`
  display: none;
  ${media.TABLET} {
    position: absolute;
    top: 18%;
    left: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      transition: transform 0.3s linear, opacity 0.3s linear;
      background-color: ${({ color }) => color};
      position: relative;
      transform-origin: 1px;

      :first-of-type {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-of-type(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
        transform: ${({ isOpen }) =>
          isOpen ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-of-type(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
