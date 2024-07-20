import { useGSAP } from "@gsap/react";
import { FC } from "react";
import gsap from "gsap";
import {
  ParallaxWrapper,
  ParallaxWrapperInner,
} from "../../components/parallaxWrapper";
import { CareerWrapper } from "./styled";
const Career: FC = () => {
  useGSAP(() => {
    gsap.from("#career-wrapper", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#career-wrapper",
        scrub: true,
        start: "top 0%",
        end: "bottom 100%",
      },
    });
  }, []);
  return (
    <ParallaxWrapper id="career-wrapper">
      <ParallaxWrapperInner>
        <CareerWrapper>Career</CareerWrapper>
      </ParallaxWrapperInner>
    </ParallaxWrapper>
  );
};

export default Career;
