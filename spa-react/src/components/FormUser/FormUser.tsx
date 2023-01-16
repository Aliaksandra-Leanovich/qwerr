import { Button, Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useGetUsersFromDB, useSetUsersToDb } from "src/hooks";
import { users } from "src/pages/About";
interface IProps {
  show: boolean;
  showModal: (value: boolean) => void;
}

export const FormUser = ({ showModal, show }: IProps) => {
  const { handleSubmit, getValues, reset, control } = useForm();

  const { setUsersToDB } = useSetUsersToDb(users);
  const { getUsers } = useGetUsersFromDB();

  const onSubmit = () => {
    const { name, surname } = getValues();
    const user = {
      name: name,
      surname: surname,
      id: "2",
      date: new Date().toLocaleString(),
    };

    users.users.push(user);

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
