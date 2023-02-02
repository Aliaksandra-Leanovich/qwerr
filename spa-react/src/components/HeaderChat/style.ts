import styled from "@emotion/styled";
import { Colors, media } from "src/ui";
import { IStylesProps } from "./types";

export const ButtonSC = styled.button`
  padding: 0 20px;
  height: 40px;

  background: ${Colors.INFODARK};
  border: 2px solid ${Colors.INFOLIGHT};
  border-radius: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;

  color: ${Colors.INFOLIGHT};

  transition: background-color 0.5s ease-out, border 0.5s ease-out;

  &:hover {
    background-color: ${Colors.SECONDARY};
    border: 2px solid ${Colors.SECONDARY};
  }
`;

export const HeaderSC = styled.header`
  width: 100%;
  height: 70px;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px 0 6px;
  border-bottom: 1px solid ${Colors.SECONDARY};

  ${media.TABLET} {
    justify-content: flex-end;
    background: rgba(255, 255, 255, 0.18);
    border-bottom: 0;
  }
`;

export const PictureSC = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${Colors.CHAT_SECONDARY};
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const UserSC = styled.li`
  list-style-type: none;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: ${Colors.INFOLIGHT};

  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${Colors.CHAT_SECONDARY};
    cursor: pointer;
  }
`;

export const ContainerUserSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  ${media.TABLET} {
    display: none;
  }
`;

export const ButtonSettingsSC = styled.button`
  border: none;

  svg {
    width: 24px;
    height: 24px;
    fill: ${Colors.SECONDARY};

    transition: fill 0.3s ease-out;

    &:hover {
      fill: ${Colors.LIGHTBLUE};
    }
  }
`;

export const SettingsContainerSC = styled.div<IStylesProps>`
  flex-direction: column;

  display: ${({ settings }) => (settings ? "flex" : "none")};
  row-gap: 60px;

  position: absolute;

  background-color: ${Colors.INFODARK};
  height: 100vh;
  width: 30%;
  top: 0;
  right: 0;
  z-index: 2;

  padding: 30px;
  border-left: 1px solid ${Colors.SECONDARY};

  ${media.TABLET} {
    height: 100vh;
    width: 100%;
    border: 0;
  }
`;

export const ContainerUserInfoSC = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  row-gap: 16px;
`;

export const ContainerSettingUserSC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 6px;
`;

export const PictureSettingSC = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Colors.SECONDARY};
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ButtonBackSC = styled.button`
  border: none;

  svg {
    height: 44px;
    width: 44px;
    transform: rotate(180deg);

    path {
      stroke: ${Colors.SECONDARY};
    }
    &:hover {
      path {
        stroke: ${Colors.LIGHTBLUE};
      }
    }
    transition: fill 0.3s ease-out;
  }
`;
