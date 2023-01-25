import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { db } from "src/utils/firebase";
import { StatusCircleSC } from "./style";

const config = [
  { value: "active", text: "status.active" },
  { value: "away", text: "status.away" },
  { value: "doNotDisturb", text: "status.doNotDisturb" },
];

export const SelectStatus = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState("active");
  const { id } = useAppSelector(getUserInfo);

  const handleChange = async (event: SelectChangeEvent) => {
    setStatus(event.target.value);
    await updateDoc(doc(db, "users", id), {
      status: event.target.value,
    });
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
      <InputLabel id="demo-select-small">{t("status")}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={status}
        label="Satus"
        onChange={handleChange}
        sx={{
          borderRadius: "200px",
          ".MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            columnGap: "6px",
          },
        }}
      >
        {config.map((item, index) => (
          <MenuItem
            key={index}
            value={item.value}
            sx={{ display: "flex", alignItems: "center", columnGap: "6px" }}
          >
            <StatusCircleSC variant={item.value} />
            {t(item.text)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
