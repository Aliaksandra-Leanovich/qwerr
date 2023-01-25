import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useEditMessage, useSetMessageToDB } from "src/hooks";
import { useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { ReactComponent as Sent } from "../../assets/sent.svg";
import { ButtonSC, FormSC, Input } from "./style";
import { IProps } from "./types";

export const InputChat = ({
  edit,
  setEdit,
  messageId,
  setMessageId,
}: IProps) => {
  const { t } = useTranslation();

  const inputPlaceholder = t("input.change");

  const { register, control, getValues, reset, handleSubmit } = useForm();
  const { value } = useAppSelector(getChatInformation);

  const { setMessageToDB } = useSetMessageToDB();
  const { editMessage } = useEditMessage(setEdit, setMessageId, messageId);

  const onSubmit = async () => {
    const { message } = getValues();

    if (edit && messageId) {
      editMessage(message);
    } else {
      setMessageToDB(message);
    }

    reset((formValues) => ({
      ...formValues,
      message: "",
    }));
  };

  useEffect(() => {
    reset({
      message: value,
    });
  }, [value]);

  return (
    <FormSC onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="message"
        render={() => (
          <Input
            type="text"
            placeholder={inputPlaceholder}
            {...register("message")}
          />
        )}
      />

      <ButtonSC type="submit">
        <Sent />
      </ButtonSC>
    </FormSC>
  );
};
