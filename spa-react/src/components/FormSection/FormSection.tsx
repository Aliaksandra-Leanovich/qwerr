import React from "react";
import { TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";

import { ContainerSC, SectionSC } from "./style";

export const FormSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <Typography variant={TypographyVariants.h3} color={Colors.INFOLIGHT}>
          An enterprise template to ramp up your company website
        </Typography>
        <FormWithEmail />
      </ContainerSC>
    </SectionSC>
  );
};
