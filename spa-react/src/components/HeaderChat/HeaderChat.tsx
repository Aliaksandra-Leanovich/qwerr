import styled from "@emotion/styled";
import React from "react";
import { SelectStatus } from "../SelectStatus/SelectStatus";

export const HeaderChat = () => {
  return (
    <HeaderSC>
      <SelectStatus />
    </HeaderSC>
  );
};

export const HeaderSC = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
