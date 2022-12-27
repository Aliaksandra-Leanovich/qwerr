import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../utils/firebase";

export const CheckboxForm = () => {
  const checkRef = doc(db, "checkField", "check");
  const [checked, setChecked] = useState<boolean>(true);

  const toggleCheck = async () => {
    setChecked(!checked);
    await updateDoc(checkRef, {
      checked: checked,
    });
  };

  return (
    <FormControlLabel
      control={<Checkbox onChange={toggleCheck} />}
      label="Check me"
    />
  );
};
