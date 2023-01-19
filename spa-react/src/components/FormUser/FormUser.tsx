import { Button, Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import uuid from "react-uuid";
import { useGetUsersFromDB, useSetUsersToDb } from "src/hooks";
import { useCalculateCode } from "src/hooks/use-calculateCode.hook";
import { FormSC, WrapperSC } from "./styles";

interface IProps {
  show: boolean;
  showModal: (value: boolean) => void;
}

export const FormUser = ({ showModal, show }: IProps) => {
  const { handleSubmit, getValues, reset, control } = useForm();

  const { setUsersToDB } = useSetUsersToDb();
  const { getUsers } = useGetUsersFromDB();
  const { calculateCodeSum } = useCalculateCode();

  const { t } = useTranslation();

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

    getUsers();
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
