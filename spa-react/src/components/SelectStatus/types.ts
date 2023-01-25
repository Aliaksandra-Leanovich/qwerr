export enum StatusVariants {
  active = "active",
  away = "away",
  doNotDisturb = "doNotDisturb",
}
export interface IPropsStyle {
  background: string;
}
export interface IStatus {
  variant: StatusVariants;
}
