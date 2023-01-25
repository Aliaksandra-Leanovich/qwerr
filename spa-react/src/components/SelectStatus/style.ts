import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IStatus, StatusVariants } from "./types";

const variantStyles = (variant = StatusVariants.active) =>
  ({
    active: css`
      background: green;
    `,
    away: css`
      background: gray;
    `,
    doNotDisturb: css`
      background: red;
    `,
  }[variant]);

export const StatusCircleSC = styled.div<Pick<IStatus, "variant">>`
  ${({ variant }) => variantStyles(variant)}

  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
