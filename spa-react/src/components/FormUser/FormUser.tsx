import { Button, Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useGetUsersFromDB, useSetUsersToDb } from "src/hooks";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getAllUsers } from "src/store/selectors/userSelector";
import { setNewUser } from "src/store/slices/usersSlice";

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

  const onSubmit = () => {
    const { name, surname } = getValues();

    const userNew = {
      name: name,
      surname: surname,
      id: "2",
      date: new Date().toLocaleString(),
    };

    dispatch(setNewUser(userNew));
    setUsersToDB();
    getUsers();

    showModal(!show);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange } }) => (
            <Input type="name" placeholder="name" onChange={onChange} />
          )}
          rules={{
            required: false,
          }}
        />
        <Controller
          name="surname"
          control={control}
          render={({ field: { onChange } }) => (
            <Input type="surname" placeholder="surname" onChange={onChange} />
          )}
          rules={{
            required: false,
          }}
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};
