import { Button } from "@mui/material";
import { Modal } from "src/components/Modal/Modal";
import { Colors } from "src/ui";
import { FormUser } from "../FormUser/FormUser";
interface IProps {
  show: boolean;
  showModal: () => void;
}

export const ModalForm = ({ show, showModal }: IProps) => {
  return (
    <>
      <Button onClick={showModal} sx={{ margin: "20px 0" }} variant="outlined">
        Add User
      </Button>
      <Modal
        show={show}
        handleClose={showModal}
        width="800px"
        color={Colors.INFOLIGHT}
        fill={Colors.INFODARK}
      >
        <FormUser showModal={showModal} show={show} />
      </Modal>
    </>
  );
};
