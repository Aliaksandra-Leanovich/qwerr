import { IProps } from "./types";
import { Field } from "./Field";
import { default as MuiTable } from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

export const Table = ({ data }: IProps) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ width: "800px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Surname</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <Field key={user.id} user={user} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
