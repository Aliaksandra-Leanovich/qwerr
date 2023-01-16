import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { Modal } from "src/components/Modal/Modal";
import { FormUser } from "../FormUser/FormUser";

export const ModalForm = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Button onClick={showModal}> Add User</Button>
      <Modal show={show} handleClose={showModal} width="800px">
        <FormUser showModal={showModal} show={show} />
      </Modal>
    </>
  );
};
