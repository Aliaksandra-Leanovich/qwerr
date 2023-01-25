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
import { getUserId } from "src/store/selectors";
import { db } from "src/utils/firebase";
import { StatusCircleSC } from "./style";
import { StatusVariants } from "./types";

export const SelectStatus = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState("active");
  const userId = useAppSelector(getUserId);

  const handleChange = async (event: SelectChangeEvent) => {
    setStatus(event.target.value);
    await updateDoc(doc(db, "users", userId), {
      status: event.target.value,
    });
    console.log("set", event.target.value);
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
        <MenuItem value={StatusVariants.active} sx={{ display: "flex" }}>
          <StatusCircleSC variant={StatusVariants.active} />
          {t("status.active")}
        </MenuItem>
        <MenuItem value={StatusVariants.away} sx={{ display: "flex" }}>
          <StatusCircleSC variant={StatusVariants.away} />
          {t("status.away")}
        </MenuItem>
        <MenuItem value={StatusVariants.doNotDisturb}>
          <StatusCircleSC variant={StatusVariants.doNotDisturb} />
          {t("status.doNotDisturb")}
        </MenuItem>
      </Select>
    </FormControl>
  );
};
