export interface IStylesProps {
  show?: boolean;
  width?: string;
  color?: string;
  fill?: string;
}

export interface IModalProps {
  handleClose: () => void;
  show: boolean;
  children: JSX.Element;
  width?: string;
  color: string;
  fill: string;
}
