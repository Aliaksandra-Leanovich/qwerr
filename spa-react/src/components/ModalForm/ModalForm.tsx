import { Button } from "@mui/material";
import { Modal } from "src/components/Modal/Modal";
import { FormUser } from "../FormUser/FormUser";
interface IProps {
  show: boolean;
  showModal: () => void;
}

export const ModalForm = ({ show, showModal }: IProps) => {
  return (
    <>
      <Button onClick={showModal}> Add User</Button>
      <Modal show={show} handleClose={showModal} width="800px">
        <FormUser showModal={showModal} show={show} />
      </Modal>
    </>
  );
};
