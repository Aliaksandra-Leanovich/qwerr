import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { TypographyVariants } from "src/enums";
import { Colors, Typography } from "src/ui";
import { Navigation, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRightSlider.svg";
import AthorImage2 from "../../assets/autherComment2.svg";
import AthorImage1 from "../../assets/authorComment1.svg";
import AthorImage3 from "../../assets/authorComment3.svg";
import {
  AuthImageSC,
  AuthorInfromationSC,
  AuthorNameSC,
  AuthorPositionSC,
  AuthorSliderSC,
  BlockSC,
  ButtonArrowSC,
  ButtonsContainerSC,
  CommentSliderSC,
  ContainerSC,
  ContainerSlideSC,
  ContainerSwiperSC,
  CustomSwiperSC,
  SectionSC,
  TitleContainerSC,
} from "./style";

const config = [
  {
    comment: "first",
    authorName: "Albus Dumbledore",
    authorPosition: "first",
    authorImage: AthorImage1,
  },
  {
    comment: "second",
    authorName: "Severus Snape",
    authorPosition: "second",
    authorImage: AthorImage2,
  },
  {
    comment: "third",
    authorName: "Harry Potter",
    authorPosition: "third",
    authorImage: AthorImage3,
  },
  {
    comment: "first",
    authorName: "Albus Dumbledore",
    authorPosition: "first",
    authorImage: AthorImage1,
  },
  {
    comment: "second",
    authorName: "Severus Snape",
    authorPosition: "second",
    authorImage: AthorImage2,
  },
  {
    comment: "third",
    authorName: "Harry Potter",
    authorPosition: "third",
    authorImage: AthorImage3,
  },
];

export const SliderSection = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperType>();
  return (
    <SectionSC>
      <ContainerSC>
        <BlockSC>
          <TitleContainerSC>
            <Typography
              variant={TypographyVariants.h3}
              color={Colors.INFOLIGHT}
            >
              {t("comment.title")}
            </Typography>
          </TitleContainerSC>
          <ButtonsContainerSC>
            <ButtonArrowSC onClick={() => swiperRef.current?.slidePrev()}>
              <ArrowLeft />
            </ButtonArrowSC>
            <ButtonArrowSC onClick={() => swiperRef.current?.slideNext()}>
              <ArrowRight />
            </ButtonArrowSC>
          </ButtonsContainerSC>
        </BlockSC>

        <ContainerSwiperSC>
          <CustomSwiperSC
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1152: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Navigation]}
          >
            {config.map((comment, index) => (
              <SwiperSlide key={index}>
                <ContainerSlideSC>
                  <CommentSliderSC>
                    {t(`comment.text.${comment.comment}`)}
                  </CommentSliderSC>
                  <AuthorSliderSC>
                    <AuthImageSC background={comment.authorImage} />
                    <AuthorInfromationSC>
                      <AuthorNameSC>{comment.authorName}</AuthorNameSC>
                      <AuthorPositionSC>
                        {t(`comment.position.${comment.authorPosition}`)}
                      </AuthorPositionSC>
                    </AuthorInfromationSC>
                  </AuthorSliderSC>
                </ContainerSlideSC>
              </SwiperSlide>
            ))}
          </CustomSwiperSC>
        </ContainerSwiperSC>
      </ContainerSC>
    </SectionSC>
  );
};
