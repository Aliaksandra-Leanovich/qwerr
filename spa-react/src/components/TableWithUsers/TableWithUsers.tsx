import { IProps } from "./types";

export const TableWithUsers = ({ data }: IProps) => {
  return (
    <div>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} {user.date} {user.surname}
        </li>
      ))}
    </div>
  );
};
