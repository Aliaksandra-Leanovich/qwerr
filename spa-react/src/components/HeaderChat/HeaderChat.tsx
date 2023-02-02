import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLogout } from "src/hooks";
import { routes } from "src/routes";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { IBurgerProps } from "../Burger/types";
import { BurgerChat } from "../BurgerChat.tsx";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrowRight.svg";
import {
  ButtonBackSC,
  ButtonSC,
  ButtonSettingsSC,
  ContainerSettingUserSC,
  ContainerUserInfoSC,
  ContainerUserSC,
  HeaderSC,
  PictureSC,
  PictureSettingSC,
  SettingsContainerSC,
  UserSC,
} from "./style";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Collections } from "src/enums";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "src/utils/firebase";
import { setUserName } from "src/store/slices/userSlice";

export const HeaderChat = ({ isOpen, setOpen, color }: IBurgerProps) => {
  const [settings, setSettings] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const { name, id } = useAppSelector(getUserInfo);
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();

  const { register, control, getValues, reset, handleSubmit } = useForm();

  const onClick = () => {
    handleLogout();

    navigate(routes.HOME);
  };

  const handleMouse = () => {
    setSettings(!settings);
  };
  const handleEdit = async () => {
    if (!edit) {
      setEdit(!edit);
      reset((formValues) => ({
        ...formValues,
        userName: name,
      }));
    } else {
      const { userName } = getValues();

      await updateDoc(doc(db, Collections.users, id), {
        name: userName,
      });
      dispatch(setUserName(userName));

      console.log(userName);

      reset((formValues) => ({
        ...formValues,
        userName: "",
      }));

      setEdit(!edit);
    }
  };

  return (
    <HeaderSC>
      <BurgerChat isOpen={isOpen} setOpen={setOpen} color={color} />
      {name && (
        <ContainerUserSC>
          <PictureSC>{name[0].charAt(0).toUpperCase()}</PictureSC>
          <UserSC>{name}</UserSC>
        </ContainerUserSC>
      )}
      <ButtonSettingsSC onClick={handleMouse}>
        <Settings />
      </ButtonSettingsSC>
      <SettingsContainerSC settings={settings}>
        <ButtonBackSC onClick={handleMouse}>
          <ArrowLeft />
        </ButtonBackSC>
        <ContainerUserInfoSC>
          {name && (
            <ContainerSettingUserSC>
              <PictureSettingSC>
                {name[0].charAt(0).toUpperCase()}
              </PictureSettingSC>
              {edit ? (
                <form onSubmit={handleSubmit(handleEdit)}>
                  <Controller
                    control={control}
                    name="userName"
                    render={() => (
                      <input type="text" {...register("userName")} />
                    )}
                  />
                  {/* <button type="submit">done</button> */}
                </form>
              ) : (
                <UserSC>{name}</UserSC>
              )}

              <ButtonSC type="submit" onClick={handleEdit}>
                {edit ? "done" : "edit"}
              </ButtonSC>
            </ContainerSettingUserSC>
          )}

          <ButtonSC type="button" onClick={onClick}>
            {t("button.logout")}
          </ButtonSC>
        </ContainerUserInfoSC>
      </SettingsContainerSC>
    </HeaderSC>
  );
};
