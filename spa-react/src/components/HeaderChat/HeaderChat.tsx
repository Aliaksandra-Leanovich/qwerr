import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLogout } from "src/hooks";
import { routes } from "src/routes";
import { useAppSelector } from "src/store/hooks";
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
  ContainerUserSC,
  HeaderSC,
  PictureSC,
  PictureSettingSC,
  SettingsContainerSC,
  UserSC,
} from "./style";
import { useState } from "react";

export const HeaderChat = ({ isOpen, setOpen, color }: IBurgerProps) => {
  const [settings, setSettings] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const { name } = useAppSelector(getUserInfo);
  const onClick = () => {
    handleLogout();

    navigate(routes.HOME);
  };

  const handleMouse = () => {
    setSettings(!settings);
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
      <ButtonSettingsSC onMouseEnter={handleMouse}>
        <Settings />
      </ButtonSettingsSC>
      <SettingsContainerSC onMouseLeave={handleMouse} settings={settings}>
        {name && (
          <ContainerSettingUserSC>
            <PictureSettingSC>
              {name[0].charAt(0).toUpperCase()}
            </PictureSettingSC>
            <UserSC>{name}</UserSC>
          </ContainerSettingUserSC>
        )}
        <ButtonBackSC>
          <ArrowLeft />
        </ButtonBackSC>

        <ButtonSC type="button" onClick={onClick}>
          {t("button.logout")}
        </ButtonSC>
      </SettingsContainerSC>
    </HeaderSC>
  );
};
