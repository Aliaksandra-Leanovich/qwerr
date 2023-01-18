import { Button, Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useGetUsersFromDB, useSetUsersToDb } from "src/hooks";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getAllUsers } from "src/store/selectors/userSelector";
import { setNewUser } from "src/store/slices/usersSlice";
import uuid from "react-uuid";
import { FormSC, WrapperSC } from "./styles";
import { useCalculateCode } from "src/hooks/use-calculateCode.hook";

interface IProps {
  show: boolean;
  showModal: (value: boolean) => void;
}

export const FormUser = ({ showModal, show }: IProps) => {
  const { handleSubmit, getValues, reset, control } = useForm();

  const users = useAppSelector(getAllUsers);
  const { setUsersToDB } = useSetUsersToDb(users.users);
  const { getUsers } = useGetUsersFromDB();

  const dispatch = useAppDispatch();

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

    dispatch(setNewUser(userNew));
    setUsersToDB();
    getUsers();

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
          Register
        </Button>
      </FormSC>
    </WrapperSC>
  );
};
