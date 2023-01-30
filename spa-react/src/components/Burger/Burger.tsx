import { StyledBurger } from "./style";
import { IBurgerProps } from "./types";

export const Burger = ({ isOpen, setOpen }: IBurgerProps) => {
  const handleClick = () => {
    setOpen(!isOpen);

    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };
  return (
    <StyledBurger isOpen={isOpen} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
