import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Collections } from "src/enums";
import { useLogout } from "src/hooks";
import { routes } from "src/routes";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { setUserName } from "src/store/slices/userSlice";
import { db } from "src/utils/firebase";
import { ReactComponent as ArrowLeft } from "../../assets/arrowRight.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { IBurgerProps } from "../Burger/types";
import { BurgerChat } from "../BurgerChat.tsx";
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
      if (id) {
        await updateDoc(doc(db, Collections.users, id), {
          name: userName,
        });
        dispatch(setUserName(userName));
      }

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
