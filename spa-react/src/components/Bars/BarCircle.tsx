import React from "react";
import { Circles } from "./";
import {
  CircleMainSC,
  ContainerWithCircleANdRows,
  RowSC,
  RowsCircleContainerSC,
  WrapperCircleSC,
} from "./style";

export const BarCircle = () => {
  return (
    <WrapperCircleSC>
      <Circles />
      <ContainerWithCircleANdRows>
        <CircleMainSC />

        <RowsCircleContainerSC>
          <RowSC width="72px" color="#95ABBC" height="8px" />
          <RowSC width="68px" color="#95ABBC" height="8px" />
          <RowSC width="76px" color="#95ABBC" height="8px" />
        </RowsCircleContainerSC>
      </ContainerWithCircleANdRows>
    </WrapperCircleSC>
  );
};
