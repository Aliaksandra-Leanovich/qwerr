import { Button, Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import uuid from "react-uuid";
import { useCalculateCode, useSetUsersToDb } from "src/hooks";
import { FormSC, WrapperSC } from "./styles";
import { IFormProps } from "./types";

export const FormUser = ({ showModal, show }: IFormProps) => {
  const { t } = useTranslation();

  const { handleSubmit, getValues, reset, control } = useForm();

  const { setUsersToDB } = useSetUsersToDb();
  const { calculateCodeSum } = useCalculateCode();

  const onSubmit = () => {
    const { name, surname } = getValues();

    let sum = calculateCodeSum(surname);

    const userNew = {
      name: name,
      surname: surname,
      id: uuid(),
      date: new Date().toLocaleString(),
      sum: sum,
    };

    setUsersToDB(userNew.id, userNew);

    showModal(!show);
    reset();
  };

  return (
    <WrapperSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange } }) => (
            <Input type="name" placeholder="Name" onChange={onChange} />
          )}
          rules={{
            required: false,
          }}
        />
        <Controller
          name="surname"
          control={control}
          render={({ field: { onChange } }) => (
            <Input type="surname" placeholder="Surname" onChange={onChange} />
          )}
          rules={{
            required: false,
          }}
        />
        <Button type="submit" variant="contained">
          {t("button.modal.form")}
        </Button>
      </FormSC>
    </WrapperSC>
  );
};
