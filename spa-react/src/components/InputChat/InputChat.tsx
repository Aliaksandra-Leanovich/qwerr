import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import uuid from "react-uuid";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import {
  getReceiverEmail,
  getUserEmail,
  getUserName,
  getValue,
} from "src/store/selectors";
import { setValue } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";
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

  const dispatch = useAppDispatch();

  const { register, handleSubmit, getValues, control, reset } = useForm();

  const value = useAppSelector(getValue);
  const userEmail = useAppSelector(getUserEmail);
  const userName = useAppSelector(getUserName);
  const receiverEmail = useAppSelector(getReceiverEmail);

  const onSubmit = async () => {
    const { message } = getValues();

    if (edit && messageId) {
      try {
        await updateDoc(doc(db, "messages", messageId), {
          message: message,
        });

        setEdit(false);
        setMessageId("");
      } catch (err) {
        console.log("error", err);
      }
    } else {
      let setId = uuid();

      if (message) {
        await setDoc(doc(db, "messages", setId), {
          id: setId,
          message: message,
          date: new Date(),
          senderEmail: userEmail,
          senderName: userName,
          receivers: [receiverEmail],
        });
      }
    }

    reset((formValues) => ({
      ...formValues,
      message: "",
    }));

    dispatch(setValue(""));
  };

  useEffect(() => {
    reset({
      message: value,
    });
  }, [reset, value]);

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
