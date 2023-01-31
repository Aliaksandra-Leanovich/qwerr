import React from "react";
import { Navigation } from "./Navigation";
import { ContainerTopNavigationSC } from "./style";
export interface INavigationProps {
  isOpen: boolean;
}

export const TopNavigation = ({ isOpen }: INavigationProps) => {
  return (
    <ContainerTopNavigationSC>
      <Navigation isOpen={isOpen} />
    </ContainerTopNavigationSC>
  );
};
