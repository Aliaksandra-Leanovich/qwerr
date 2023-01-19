import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import { default as MuiTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Field } from "./";
import { IDataProps, IUser } from "./types";

export const Table = ({ data }: IDataProps) => {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(false);
  const [filtered, setFiltered] = useState<IUser[]>([]);

  const result = useMemo(
    () => (filtered.length ? filtered : data),
    [filtered, data]
  );

  const toggleCheck = () => {
    setChecked(!checked);
    const initialArray = Object.freeze([...data]);
    const sortedArray = initialArray.slice().sort((a, b) => a.sum - b.sum);

    if (!checked) {
      setFiltered(sortedArray);
    } else {
      setFiltered(data);
    }
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ width: "800px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>{t("field.first")}</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>
              {t("field.second")}
            </TableCell>
            <TableCell sx={{ fontWeight: "600" }}>{t("field.third")}</TableCell>
            <TableCell
              sx={{
                fontWeight: "600",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {t("field.forth")}
              <FormControlLabel
                control={<Checkbox onChange={toggleCheck} />}
                label={t("checkbox.field")}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result?.map((user) => (
            <Field key={user.id} user={user} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
