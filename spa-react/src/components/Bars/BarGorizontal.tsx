import React from "react";
import { Circles } from "./";
import {
  Persent,
  RowContainer,
  RowSC,
  RowsContainerSC,
  WrapperSC,
} from "./style";

export const BarGorizontal = () => {
  return (
    <WrapperSC>
      <Circles />
      <RowsContainerSC>
        <RowContainer>
          <RowSC width="54px" color="#95ABBC" height="12px" />
          <RowSC width="270px" color="#8FB6D5" height="12px" />
          <Persent>80%</Persent>
        </RowContainer>
        <RowContainer>
          <RowSC width="54px" color="#95ABBC" height="12px" />
          <RowSC width="80px" color="#95ABBC" height="12px" />
          <Persent>30%</Persent>
        </RowContainer>
        <RowContainer>
          <RowSC width="54px" color="#95ABBC" height="12px" />
          <RowSC width="318px" color="#FFFFFF" height="12px" />
          <Persent>100%</Persent>
        </RowContainer>
        <RowContainer>
          <RowSC width="54px" color="#95ABBC" height="12px" />
          <RowSC width="254px" color="#65E4A3" height="12px" />
          <Persent>75%</Persent>
        </RowContainer>
      </RowsContainerSC>
    </WrapperSC>
  );
};
