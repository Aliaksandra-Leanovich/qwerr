import { Outlet } from "react-router-dom";
import { Cursor } from "../Cursor/Cursor";

import { ContainerSC, WrapperSC } from "./style";

export const MainTemplate = () => {
  return (
    <WrapperSC>
      <Cursor />

      <ContainerSC>
        <Outlet />
      </ContainerSC>
    </WrapperSC>
  );
};
