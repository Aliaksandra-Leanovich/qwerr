import React from "react";
import { Circles } from "./";
import {
  Column,
  DiagramBottomSC,
  DiagramTopSC,
  WrapperVerticalSC,
} from "./style";

export const BarVertical = () => {
  return (
    <WrapperVerticalSC>
      <Circles />
      <DiagramTopSC>
        <Column height="62px" background="#0DBBFC" />
        <Column height="42px" background="#0DBBFC" />
        <Column height="82px" background="#95ABBC" />
        <Column height="58px" background="#0DBBFC" />
        <Column height="70px" background="#0DBBFC" />
        <Column height="32px" background="#0DBBFC" />
      </DiagramTopSC>
      <DiagramBottomSC>
        <Column height="24px" background="#0DBBFC" />
        <Column height="14px" background="#0DBBFC" />
      </DiagramBottomSC>
    </WrapperVerticalSC>
  );
};
