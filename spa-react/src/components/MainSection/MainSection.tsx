import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonVariants, TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Bar } from "../Bars";
import { Button } from "../Button";
import { Canvas } from "../Canvas/Canvas";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";
import { Header } from "../Header";
import { Modal } from "../Modal/Modal";
import { SliderLogos } from "../SliderLogos";
import {
  CanvasContainerSC,
  ContainerButtonsSC,
  ContainerDescriptionSC,
  ContainerSC,
  ContainerWithTwoBlocksSC,
  MainContainerSC,
  WrapperSC,
} from "./style";

export const MainSection = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };
  const { t } = useTranslation();

  return (
    <MainContainerSC>
      <WrapperSC id="product">
        <CanvasContainerSC>
          <Canvas />
        </CanvasContainerSC>
        <Header />
        <ContainerSC>
          <ContainerWithTwoBlocksSC>
            <ContainerDescriptionSC>
              <Typography
                variant={TypographyVariants.h3}
                color={Colors.INFOLIGHT}
              >
                {t("main.title")}
              </Typography>
              <ContainerDescriptionSC>
                <Typography
                  variant={TypographyVariants.paragraphXS}
                  color={Colors.INFOLIGHT}
                >
                  {t("main.description")}
                </Typography>
              </ContainerDescriptionSC>

              <ContainerButtonsSC>
                <Button
                  type="button"
                  handleClick={showModal}
                  variant={ButtonVariants.primaryGreenLarge}
                >
                  {t("button.main.first")}
                </Button>
                <Button
                  type="button"
                  handleClick={showModal}
                  variant={ButtonVariants.secondaryWhiteLarge}
                >
                  {t("button.main.second")}
                </Button>
              </ContainerButtonsSC>
            </ContainerDescriptionSC>

            <Bar />
          </ContainerWithTwoBlocksSC>
          <SliderLogos />
        </ContainerSC>
      </WrapperSC>

      <Modal
        show={show}
        handleClose={showModal}
        width="800px"
        color={Colors.PRIMARY}
      >
        <FormWithEmail />
      </Modal>
    </MainContainerSC>
  );
};
