import React from "react";
import { Circles } from "./";
import {
  Column,
  DiagramBottomSC,
  DiagramTopSC,
  WrapperVerticalSC,
} from "./style";
import { Colors } from "./types";

const columns = [
  {
    height: "62px",
    background: Colors.LIGHTBLUE,
    minHeight: "52px",
  },
  {
    height: "42px",
    background: Colors.LIGHTBLUE,
    minHeight: "32px",
  },
  {
    height: "82px",
    background: Colors.PRIMARY,
    minHeight: "72px",
  },
  {
    height: "58px",
    background: Colors.LIGHTBLUE,
    minHeight: "48px",
  },
  {
    height: "70px",
    background: Colors.LIGHTBLUE,
    minHeight: "60px",
  },
  {
    height: "32px",
    background: Colors.LIGHTBLUE,
    minHeight: "22px",
  },
  {
    height: "24px",
    background: Colors.LIGHTBLUE,
    minHeight: "14px",
  },
  {
    height: "14px",
    background: Colors.LIGHTBLUE,
    minHeight: "8px",
  },
];

const columnsUp = columns.slice(0, 6);
const columnsDown = columns.slice(6, 8);

export const BarVertical = () => {
  return (
    <WrapperVerticalSC>
      <Circles />
      <DiagramTopSC>
        {columnsUp.map((column, index) => (
          <Column
            key={index}
            height={column.height}
            minHeight={column.minHeight}
            background={column.background}
          />
        ))}
      </DiagramTopSC>
      <DiagramBottomSC>
        {columnsDown.map((column, index) => (
          <Column
            key={index}
            height={column.height}
            minHeight={column.minHeight}
            background={column.background}
          />
        ))}
      </DiagramBottomSC>
    </WrapperVerticalSC>
  );
};
