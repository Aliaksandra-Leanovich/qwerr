import { StyledBurger } from "./style";
import { IBurgerProps } from "./types";

export const Burger = ({ isOpen, setOpen, color }: IBurgerProps) => {
  const handleClick = () => {
    setOpen(!isOpen);

    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };
  return (
    <StyledBurger isOpen={isOpen} onClick={handleClick} color={color}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
