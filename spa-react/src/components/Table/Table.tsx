import { IProps } from "./types";
import { Field } from "./Field";

export const Table = ({ data }: IProps) => {
  return (
    <div>
      {data.map((user) => (
        <Field key={user.id} user={user} />
      ))}
    </div>
  );
};
