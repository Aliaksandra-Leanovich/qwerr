import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "src/ui";
import { IStatus } from "./types";

const variantStyles = (variant = "active") =>
  ({
    active: css`
      background: ${Colors.GREEN};
    `,
    away: css`
      background: ${Colors.LIGHTGRAY};
    `,
    doNotDisturb: css`
      background: ${Colors.RED};
    `,
  }[variant]);

export const StatusCircleSC = styled.div<Pick<IStatus, "variant">>`
  ${({ variant }) => variantStyles(variant)}

  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
