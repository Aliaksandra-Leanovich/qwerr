import React from "react";
import BackgroundImage from "../../assets/dropdownBackground.svg";
import { ReactComponent as DropdowmImage } from "../../assets/dropdownImage.svg";
import { TypographyVariants } from "../../enums";
import { Typography } from "../../ui";
import { DropdownItem } from "./DropdownItem";
import {
  ContainerImageSC,
  ContainerInformationSC,
  ContainerSC,
  DescriptionBlockSC,
  DropdownsContainerSC,
  SectionSC,
} from "./style";

const config = [
  {
    title: "We connect our customers with the best?",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    image: <DropdowmImage />,
  },
  {
    title: "Android research & development rockstar? ",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  ",
    image: <DropdowmImage />,
  },
];

export const DropdownSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <ContainerImageSC background={BackgroundImage} />

        <ContainerInformationSC>
          <DescriptionBlockSC>
            <Typography variant={TypographyVariants.h3}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Typography>
          </DescriptionBlockSC>

          <DropdownsContainerSC>
            {config.map((item, index) => (
              <DropdownItem item={item} key={index} />
            ))}
          </DropdownsContainerSC>
        </ContainerInformationSC>
      </ContainerSC>
    </SectionSC>
  );
};
