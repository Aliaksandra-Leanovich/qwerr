import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CheckImg from "../../assets/checkImg.svg";
import ConnectImg1 from "../../assets/connectImg1.svg";
import ConnectImg2 from "../../assets/connectImg2.svg";
import { ReactComponent as EyeImg } from "../../assets/eye.svg";
import { ReactComponent as FeatherImg } from "../../assets/feather.svg";
import { ReactComponent as SunImg } from "../../assets/sun.svg";
import { ButtonVariants, TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Button } from "../Button";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";
import { Modal } from "../Modal/Modal";

import {
  AdvantageSC,
  AdvantagesContainerSC,
  BlockWithCirclSC,
  CheckImgSC,
  CircleSC,
  Column,
  ContainerBlocksSC,
  ContainerDiagramSC,
  ContainerImageAndDiagramSC,
  ContainerSC,
  DescriptionBlockSC,
  DescriptionDiagramSC,
  DescriptionSC,
  DiagramBottomSC,
  DiagramTopSC,
  DotSC,
  ImageContainerSC,
  PersentsBlockSC,
  PersentsContainerSC,
  PersentTextSC,
  SectionSC,
  TextContainerSC,
  TitleContainerSC,
} from "./style";

const config = [
  { text: "first", image: <FeatherImg /> },
  { text: "second", image: <EyeImg /> },
  { text: "third", image: <SunImg /> },
];

const columns = [
  { height: "134px", background: Colors.INFOLIGHT, minHeight: "74px" },
  { height: "92px", background: Colors.INFOLIGHT, minHeight: "32px" },
  { height: "134px", background: Colors.LIGHTBLUE, minHeight: "74px" },
  { height: "92px", background: Colors.LIGHTBLUE, minHeight: "32px" },
  { height: "176px", background: Colors.PRIMARY, minHeight: "116px" },
  { height: "124px", background: Colors.LIGHTBLUE, minHeight: "64px" },
  { height: "150px", background: Colors.LIGHTBLUE, minHeight: "90px" },
  { height: "68px", background: Colors.LIGHTBLUE, minHeight: "8px" },
  { height: "50px", background: Colors.LIGHTBLUE, minHeight: "5px" },
  { height: "28px", background: Colors.LIGHTBLUE, minHeight: "8px" },
];

const percents = [
  {
    background: Colors.LIGHTBLUE,
    text: "first",
  },
  {
    background: Colors.SECONDARY,
    text: "second",
  },
  {
    background: Colors.GRAY,
    text: "third",
  },
];

export const ConnectSection = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  const columnUp = columns.slice(0, 8);
  const columnsDown = columns.slice(7, 9);

  return (
    <SectionSC>
      <ContainerSC>
        <ContainerBlocksSC>
          <ContainerImageAndDiagramSC>
            <ImageContainerSC height="506px">
              <img src={ConnectImg1} alt="person" />
            </ImageContainerSC>
            <ContainerDiagramSC>
              <DiagramTopSC>
                {columnUp.map((column, index) => (
                  <Column
                    key={index}
                    height={column.height}
                    minHeight={column.minHeight}
                    background={column.background}
                  />
                ))}
              </DiagramTopSC>
              <DiagramBottomSC>
                {columnsDown.map((column, index) => (
                  <Column
                    key={index}
                    height={column.height}
                    background={column.background}
                    minHeight={column.minHeight}
                  />
                ))}
              </DiagramBottomSC>

              <DescriptionDiagramSC>
                <Typography
                  variant={TypographyVariants.paragraphMBold}
                  color={Colors.PRIMARY}
                >
                  30%
                </Typography>
                <Typography
                  variant={TypographyVariants.subtitle}
                  color={Colors.PRIMARY}
                >
                  {t("connect.diagram.first")}
                </Typography>
              </DescriptionDiagramSC>
            </ContainerDiagramSC>
          </ContainerImageAndDiagramSC>

          <TextContainerSC>
            <TitleContainerSC>
              <Typography variant={TypographyVariants.h4}>
                {t(`connect.title`)}
              </Typography>
            </TitleContainerSC>

            <DescriptionBlockSC>
              {config.map((item, index) => (
                <DescriptionSC key={index}>
                  <CheckImgSC src={CheckImg} />
                  <Typography variant={TypographyVariants.paragraphS}>
                    {t(`connect.subtitle.${item.text}`)}
                  </Typography>
                </DescriptionSC>
              ))}
            </DescriptionBlockSC>
            <Button
              handleClick={showModal}
              variant={ButtonVariants.primaryLarge}
              type="button"
            >
              {t(`connect.button`)}
            </Button>
          </TextContainerSC>
        </ContainerBlocksSC>
        <ContainerBlocksSC>
          <TextContainerSC>
            <TitleContainerSC>
              <Typography variant={TypographyVariants.h4}>
                {t(`connect.title`)}
              </Typography>
            </TitleContainerSC>

            <DescriptionBlockSC>
              <AdvantagesContainerSC>
                {config.map((item, index) => (
                  <AdvantageSC key={index}>
                    {item.image}
                    <Typography variant={TypographyVariants.paragraphS}>
                      {t(`connect.subtitle.${item.text}`)}
                    </Typography>
                  </AdvantageSC>
                ))}
              </AdvantagesContainerSC>
            </DescriptionBlockSC>
          </TextContainerSC>
          <ContainerImageAndDiagramSC>
            <ImageContainerSC height="524px">
              <img src={ConnectImg2} alt="person" />
            </ImageContainerSC>
            <BlockWithCirclSC>
              <CircleSC />
              <PersentsBlockSC>
                {percents.map((percent, index) => (
                  <PersentsContainerSC key={index}>
                    <DotSC background={percent.background} />
                    <PersentTextSC>
                      {t(`connect.precent.${percent.text}`)}
                    </PersentTextSC>
                  </PersentsContainerSC>
                ))}
              </PersentsBlockSC>
            </BlockWithCirclSC>
          </ContainerImageAndDiagramSC>
        </ContainerBlocksSC>
      </ContainerSC>
      <Modal
        show={show}
        handleClose={showModal}
        width="800px"
        color={Colors.PRIMARY}
        fill={Colors.INFOLIGHT}
      >
        <FormWithEmail />
      </Modal>
    </SectionSC>
  );
};
