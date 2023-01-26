import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IUserProps } from "./types";

export const Field = ({ user }: IUserProps) => {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.surname}</TableCell>
      <TableCell>{user.date}</TableCell>
      <TableCell>{user.sum}</TableCell>
    </TableRow>
  );
};
