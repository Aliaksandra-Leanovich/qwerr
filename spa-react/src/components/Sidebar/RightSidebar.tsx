import React from "react";
import { Sidebar } from "./Sidebar";
import { ContainerRightSC } from "./style";
import { IStylesProps } from "./types";

export const RightSidebar = ({ isOpen }: IStylesProps) => {
  return (
    <ContainerRightSC isOpen={isOpen}>
      <Sidebar />
    </ContainerRightSC>
  );
};
