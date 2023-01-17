import { IUser } from "./types";
interface IProps {
  user: IUser;
}
export const Field = ({ user }: IProps) => {
  let sum = 0;

  const calculateCodeSum = (string: string) => {
    const array = string.split("");
    array.forEach((item) => {
      item.charCodeAt(0);
      sum = sum + item.charCodeAt(0);
    });
  };

  calculateCodeSum(user.surname);
  return (
    <div>
      <p>{user.surname}</p>
      <p>{sum}</p>
    </div>
  );
};
