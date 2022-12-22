import { useRef } from "react";
import { Swiper as SwiperType, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import AthorImage2 from "../../assets/autherComment2.svg";
import AthorImage1 from "../../assets/authorComment1.svg";
import AthorImage3 from "../../assets/authorComment3.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRightSlider.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
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
  TitleSC,
} from "./style";

const config = [
  {
    comment:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    authorName: "Albus Dumbledore",
    authorPosition: " Manager @ Howarts",
    authorImage: AthorImage1,
  },
  {
    comment:
      "“Learning curve infrastructure value proposition advisor advisor strategy user experience hypotheses investor.”",
    authorName: "Severus Snape",
    authorPosition: " Manager @ Slytherin",
    authorImage: AthorImage2,
  },
  {
    comment:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    authorName: "Harry Potter",
    authorPosition: " Team Leader @ Gryffindor",
    authorImage: AthorImage3,
  },
  {
    comment:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    authorName: "Albus Dumbledore",
    authorPosition: " Manager @ Howarts",
    authorImage: AthorImage1,
  },
  {
    comment:
      "“Learning curve infrastructure value proposition advisor advisor strategy user experience hypotheses investor.”",
    authorName: "Severus Snape",
    authorPosition: " Manager @ Slytherin",
    authorImage: AthorImage2,
  },
  {
    comment:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    authorName: "Harry Potter",
    authorPosition: " Team Leader @ Gryffindor",
    authorImage: AthorImage3,
  },
];

export const SliderSection = () => {
  const swiperRef = useRef<SwiperType>();
  return (
    <SectionSC>
      <ContainerSC>
        <BlockSC>
          <TitleContainerSC>
            <TitleSC>
              An enterprise template to ramp up your company website
            </TitleSC>
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
                  <CommentSliderSC>{comment.comment}</CommentSliderSC>
                  <AuthorSliderSC>
                    <AuthImageSC background={comment.authorImage} />
                    <AuthorInfromationSC>
                      <AuthorNameSC>{comment.authorName}</AuthorNameSC>
                      <AuthorPositionSC>
                        {comment.authorPosition}
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
