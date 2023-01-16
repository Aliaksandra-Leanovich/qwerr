import { IProps } from "./types";

export const TableWithUsers = ({ data }: IProps) => {
  return (
    <div>
      {data?.map((user, index) => (
        <li key={index}>
          {user.name} {user.date} {user.surname}
        </li>
      ))}
    </div>
  );
};
