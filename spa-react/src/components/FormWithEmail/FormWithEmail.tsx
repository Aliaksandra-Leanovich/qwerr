import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CheckIcon from "../../assets/checkIconWithoutBackground.svg";
import CrossIcon from "../../assets/cross-icon.svg";
import { db } from "../../utils/firebase";
import { ButtonSC, ContainerInputSC, FormSC, IconSC, Input } from "./style";

export const FormWithEmail = () => {
  const { register, handleSubmit, reset, getValues, control } = useForm();

  const [button, setButton] = useState<any>("Start now");

  const addUser = async (email: string) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
      });
      setButton(<IconSC src={CheckIcon} />);
      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      setButton(<IconSC src={CrossIcon} />);
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = () => {
    const { email } = getValues();
    addUser(email);
    reset();
  };

  return (
    <FormSC onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputSC>
        <Controller
          name="email"
          control={control}
          render={() => (
            <Input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
            />
          )}
        />
      </ContainerInputSC>

      <ButtonSC>{button}</ButtonSC>
    </FormSC>
  );
};
