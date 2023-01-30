import { useState } from "react";
import { Colors } from "../../ui";
import { Burger } from "../Burger";
import { Logo } from "../Logo";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
import { ContainerSC, StyledHeaderSC, WrapperSC } from "./style";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <Logo background={Colors.SECONDARY} color={Colors.INFOLIGHT} />
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <Burger isOpen={isOpen} setOpen={setOpen} />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
