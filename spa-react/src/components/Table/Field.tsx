import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
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
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.surname}</TableCell>
      <TableCell>{user.date}</TableCell>
      <TableCell>{sum}</TableCell>
    </TableRow>
  );
};
