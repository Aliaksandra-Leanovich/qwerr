import { Circles } from "./";
import {
  CircleMainSC,
  ContainerWithCircleANdRows,
  RowSC,
  RowsCircleContainerSC,
  WrapperCircleSC,
} from "./style";
import { Colors } from "./types";

const rows = [
  {
    width: "72px",
    color: Colors.PRIMARY,
    height: "8px",
    minWidth: "42px",
  },
  {
    width: "68px",
    color: Colors.PRIMARY,
    height: "8px",
    minWidth: "38px",
  },
  {
    width: "76px",
    color: Colors.PRIMARY,
    height: "8px",
    minWidth: "42px",
  },
];

export const BarCircle = () => {
  return (
    <WrapperCircleSC>
      <Circles />
      <ContainerWithCircleANdRows>
        <CircleMainSC />

        <RowsCircleContainerSC>
          {rows.map((row, index) => (
            <RowSC
              key={index}
              width={row.width}
              color={row.color}
              height={row.height}
              minWidth={row.minWidth}
            />
          ))}
        </RowsCircleContainerSC>
      </ContainerWithCircleANdRows>
    </WrapperCircleSC>
  );
};
