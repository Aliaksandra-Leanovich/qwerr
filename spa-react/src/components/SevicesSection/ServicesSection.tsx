import React from "react";
import { TypographyVariants } from "../../enums";
import { Colors } from "../../ui";
import { Typography } from "../../ui/Typography";
import { ConnectSection } from "../ConnectSection";
import { ExploreSection } from "../ExploreSection";
import { SectionSC, WrapperSC } from "./style";

export const ServicesSection = () => {
  return (
    <SectionSC id="services">
      <WrapperSC>
        <Typography variant={TypographyVariants.paragraphS} color={Colors.GRAY}>
          Our Services
        </Typography>
        <ExploreSection />
        <ConnectSection />
      </WrapperSC>
    </SectionSC>
  );
};
