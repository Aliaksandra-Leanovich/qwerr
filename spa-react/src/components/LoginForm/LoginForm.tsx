import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonVariants } from "../../enums";
import { validationSchema } from "../../helper";
import { useLogin } from "../../hooks";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledFormSC } from "./styles";
import { IUserForm } from "./types";

interface IProps {
  setShow: (value: boolean) => void;
}

export const LoginForm = ({ setShow }: IProps) => {
  const { t } = useTranslation();

  const valueEmail = t("input.value.email");
  const valuePassword = t("input.value.password");
  const valueName = t("input.value.name");

  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const { error, onSubmit } = useLogin(setShow, clearErrors);

  return (
    <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            type="name"
            label="name"
            value={value}
            onChange={onChange}
            register={register}
            placeholder={valueName}
          />
        )}
        rules={{
          required: false,
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            type="email"
            label="email"
            value={value}
            onChange={onChange}
            errors={errors.email?.message || error}
            register={register}
            placeholder={valueEmail}
          />
        )}
        rules={{
          required: false,
        }}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            type="password"
            label="password"
            value={value}
            onChange={onChange}
            errors={errors.password?.message}
            register={register}
            placeholder={valuePassword}
          />
        )}
        rules={{
          required: false,
        }}
      />
      <Button variant={ButtonVariants.primaryGreenLarge} type="submit">
        {t("button.login")}
      </Button>
    </StyledFormSC>
  );
};
