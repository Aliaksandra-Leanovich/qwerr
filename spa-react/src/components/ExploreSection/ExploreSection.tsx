import React, { useState } from "react";
import ArrowRight from "../../assets/arrowRight.svg";
import ExploreImg1 from "../../assets/exploreImg1.svg";
import ExploreImg2 from "../../assets/exploreImg2.svg";
import ExploreImg3 from "../../assets/exploreImg3.svg";
import { TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";
import { Modal } from "../Modal/Modal";
import {
  BlockSC,
  ContainerOfBlocksSC,
  ContainerSC,
  ImageSC,
  LinkBlockSC,
  LinkSC,
  SectionSC,
  TitleContainerSC,
  TitleSC,
} from "./style";

const config = [
  {
    image: ExploreImg1,
    title: "Cool feature title",
    description: " Learning curve network effects return on investment.",
    link: {
      image: ArrowRight,
      text: "Explore page",
    },
  },
  {
    image: ExploreImg2,
    title: "Cool feature title",
    description: " Learning curve network effects return on investment.",
    link: {
      image: ArrowRight,
      text: "Explore page",
    },
  },
  {
    image: ExploreImg3,
    title: "Cool feature title",
    description: " Learning curve network effects return on investment.",
    link: {
      image: ArrowRight,
      text: "Explore page",
    },
  },
];

export const ExploreSection = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <SectionSC>
      <ContainerSC>
        <TitleSC>
          Handshake infographic mass market crowdfunding iteration.
        </TitleSC>
        <ContainerOfBlocksSC>
          {config.map((item, index) => (
            <BlockSC key={index}>
              <ImageSC src={item.image} alt="explore section" />
              <TitleContainerSC>
                <Typography variant={TypographyVariants.paragraphM}>
                  {item.title}
                </Typography>
              </TitleContainerSC>

              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.GRAY}
              >
                {item.description}
              </Typography>
              <LinkBlockSC>
                <LinkSC onClick={showModal}>{item.link.text}</LinkSC>
                <img src={item.link.image} alt="arrow" />
              </LinkBlockSC>
            </BlockSC>
          ))}
        </ContainerOfBlocksSC>
      </ContainerSC>
      <Modal show={show} handleClose={showModal} width="800px">
        <FormWithEmail />
      </Modal>
    </SectionSC>
  );
};
