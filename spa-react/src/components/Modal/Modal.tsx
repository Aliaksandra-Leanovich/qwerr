import React from "react";
import { ReactComponent as CrossIcon } from "../../assets/cross-icon.svg";
import {
  ButtonSC,
  ContainerButtonSC,
  ContainerChildSC,
  ContainerSC,
  WrapperSC,
} from "./styles";
import { IModalProps } from "./types";

export const Modal = ({
  handleClose,
  show,
  children,
  width,
  color,
  fill,
}: IModalProps) => {
  return (
    <WrapperSC show={show}>
      <ContainerSC show={show} width={width} color={color}>
        <ContainerButtonSC>
          <ButtonSC type="button" onClick={handleClose} fill={fill}>
            <CrossIcon />
          </ButtonSC>
        </ContainerButtonSC>
        <ContainerChildSC>{children}</ContainerChildSC>
      </ContainerSC>
    </WrapperSC>
  );
};
