import React from "react";
import { Colors } from "../../ui";
import { Logo } from "../Logo";
import {
  BlockWithLinksSC,
  BlockWithLogoSC,
  CategoryLinkSC,
  ContainerLinkSC,
  ContainerSC,
  Description,
  LabelSC,
  LinksSC,
  RightsSC,
  StyledFooterSC,
  SubcategorydLinkSC,
  WrapperSC,
} from "./styles";

const config = [
  {
    category: "Landings",
    link: "#products",
    subcategories: [
      { name: "Home", link: "#products" },
      { name: "Products", link: "#products" },
      { name: " Services", link: "#services" },
    ],
  },
  {
    category: "Company",
    link: "#services",
    subcategories: [
      { name: "Home", link: "#blog" },
      { name: "Careers", link: "#products", label: "Hiring!" },
      { name: "Services", link: "#services" },
    ],
  },
  {
    category: "Resources",
    link: "#blog",
    subcategories: [
      { name: "Blog", link: "#blog" },
      { name: "Products", link: "#products" },
      { name: "Services", link: "#services" },
    ],
  },
];

export const Footer = () => {
  return (
    <StyledFooterSC>
      <WrapperSC>
        <ContainerSC>
          <BlockWithLogoSC>
            <Logo color={Colors.PRIMARY} background={Colors.PRIMARY} />
            <Description>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </Description>
            <RightsSC>All rights reserved.</RightsSC>
          </BlockWithLogoSC>
          <BlockWithLinksSC>
            {config.map((category, index) => (
              <LinksSC key={index}>
                <CategoryLinkSC href={category.link} key={index}>
                  {category.category}
                </CategoryLinkSC>
                {category.subcategories.map((subcategory, index) => (
                  <ContainerLinkSC key={index}>
                    <SubcategorydLinkSC>{subcategory.name}</SubcategorydLinkSC>
                    {subcategory.label && (
                      <LabelSC>{subcategory.label}</LabelSC>
                    )}
                  </ContainerLinkSC>
                ))}
              </LinksSC>
            ))}
          </BlockWithLinksSC>
        </ContainerSC>
      </WrapperSC>
    </StyledFooterSC>
  );
};
