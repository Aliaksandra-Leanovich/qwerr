import React, { useState } from "react";
import { TypographyVariants } from "../../enums";
import { Typography } from "../../ui";
import {
  DropdownButtonSC,
  DropdownContainerSC,
  DropdownDescriptionSC,
  DropdownSC,
} from "./style";

export const DropdownItem = ({ item }: any) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <DropdownContainerSC>
      <DropdownSC>
        <Typography variant={TypographyVariants.paragraphS}>
          {item.title}
        </Typography>
        <DropdownButtonSC onClick={handleClick} isOpen={isOpen}>
          {item.image}
        </DropdownButtonSC>
      </DropdownSC>
      <DropdownDescriptionSC isOpen={isOpen}>
        <Typography variant={TypographyVariants.paragraphXS}>
          {item.description}
        </Typography>
      </DropdownDescriptionSC>
    </DropdownContainerSC>
  );
};
