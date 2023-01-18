import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IUser } from "./types";
interface IProps {
  user: IUser;
}
export const Field = ({ user }: IProps) => {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.surname}</TableCell>
      <TableCell>{user.date}</TableCell>
      <TableCell>{user.sum}</TableCell>
    </TableRow>
  );
};
