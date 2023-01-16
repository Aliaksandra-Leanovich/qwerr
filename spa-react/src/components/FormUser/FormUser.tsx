import { Button, Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export const FormUser = ({ showModal, show }: any) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    getValues,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const { name, surname } = getValues();
    console.log(name, surname);
    showModal(!show);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input type="name" placeholder="name" onChange={onChange} />
          )}
          rules={{
            required: false,
          }}
        />
        <Controller
          name="surname"
          control={control}
          render={({ field: { onChange, value } }) => (
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
