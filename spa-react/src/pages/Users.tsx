import React from "react";
import { EmailsTable } from "../components/EmailsTable/EmailsTable";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { ButtonVariants } from "../enums";

export const Users = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Button variant={ButtonVariants.secondaryLarge} handleClick={handleBack}>
        Back
      </Button>
      <EmailsTable />
    </>
  );
};
