import { IProps, IUser } from "./types";
import { Field } from "./Field";
import { default as MuiTable } from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export const Table = ({ data }: IProps) => {
  const [checked, setChecked] = useState(false);
  const [filtered, setFiltered] = useState(data);

  const toggleCheck = () => {
    setChecked(!checked);
    const arr = Object.freeze([...data]);
    const arr1 = arr.slice().sort((a, b) => a.sum - b.sum);

    if (!checked) {
      setFiltered(arr1);
    } else {
      setFiltered(data);
    }
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ width: "800px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Surname</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>
              Sum
              <FormControlLabel
                control={<Checkbox onChange={toggleCheck} />}
                label="To highest"
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((user) => (
            <Field key={user.id} user={user} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
