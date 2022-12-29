import React, { useState } from "react";
import { ButtonVariants, TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Bar } from "../Bars";
import { Button } from "../Button";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";
import { Modal } from "../Modal/Modal";
import { SliderLogos } from "../SliderLogos";

import {
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

  return (
    <MainContainerSC>
      <WrapperSC id="product">
        <ContainerSC>
          <ContainerWithTwoBlocksSC>
            <ContainerDescriptionSC>
              <Typography
                variant={TypographyVariants.h3}
                color={Colors.INFOLIGHT}
              >
                Save time by building fast with Boldo Template
              </Typography>
              <ContainerDescriptionSC>
                <Typography
                  variant={TypographyVariants.paragraphXS}
                  color={Colors.INFOLIGHT}
                >
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </Typography>
              </ContainerDescriptionSC>

              <ContainerButtonsSC>
                <Button
                  type="button"
                  handleClick={showModal}
                  variant={ButtonVariants.primaryGreenLarge}
                >
                  Buy template
                </Button>
                <Button
                  type="button"
                  handleClick={showModal}
                  variant={ButtonVariants.secondaryWhiteLarge}
                >
                  Explore
                </Button>
              </ContainerButtonsSC>
            </ContainerDescriptionSC>

            <Bar />
          </ContainerWithTwoBlocksSC>
          <SliderLogos />
        </ContainerSC>
      </WrapperSC>
      <Modal show={show} handleClose={showModal} width="800px">
        <FormWithEmail />
      </Modal>
    </MainContainerSC>
  );
};
