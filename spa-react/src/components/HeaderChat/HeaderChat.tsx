import styled from "@emotion/styled";
import { IBurgerProps } from "../Burger/types";
import { BurgerChat } from "../BurgerChat.tsx";
import { SelectStatus } from "../SelectStatus/SelectStatus";

export const HeaderChat = ({ isOpen, setOpen, color }: IBurgerProps) => {
  return (
    <HeaderSC>
      {/* <BurgerChat isOpen={isOpen} setOpen={setOpen} color={color} /> */}
      <SelectStatus />
    </HeaderSC>
  );
};

export const HeaderSC = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
