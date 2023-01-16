import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useUpdateDoc } from "../../hooks";

export const CheckboxForm = () => {
  const { toggleCheck } = useUpdateDoc();

  return (
    <FormControlLabel
      control={<Checkbox onChange={toggleCheck} />}
      label="Check me"
    />
  );
};
