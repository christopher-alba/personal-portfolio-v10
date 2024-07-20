import { FC, useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ParallaxWrapperFluid,
  ParallaxWrapperInnerFluid,
} from "../../components/parallaxWrapper";
import {
  AnchorButton,
  ContentBlock,
  DividerWrapper,
  HexPattern,
  PeopleSVG,
  PersonSVG,
  ServicesWrapper,
  TitleBlock,
} from "./styled";
import { DefaultTheme, ThemeContext } from "styled-components";
import { Subtitle, Title } from "../../components/title";
const Services: FC = () => {
  const theme = useContext(ThemeContext) as DefaultTheme;
  useGSAP(() => {
    gsap.fromTo(
      "#services-wrapper-2",
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#services-wrapper-2",
          scrub: true,
          start: "0% 0%",
          end: "25% top",
        },
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#services-wrapper-2",
      {
        scrollTrigger: {
          trigger: "#services-wrapper-2",
          scrub: true,
          start: "75% 75%",
          end: "100% top",
        },
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );

    gsap.fromTo(
      "#services-wrapper-3",
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#services-wrapper-3",
          scrub: true,
          start: "0% 0%",
          end: "25% top",
          markers: false,
        },
        opacity: 1,
      }
    );

    gsap.to("#services-divider-wrapper", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#services-divider-wrapper",
        start: "90% top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap
      .timeline()
      .fromTo(
        [
          "#services-divider-wrapper #hexagon-mask-primary",
          "#services-divider-wrapper #hexagon-mask-tertiary",
        ],
        {
          opacity: 0,
          scale: 0.5,
          x: "-200px",
        },
        {
          opacity: 1,
          scale: 2.5,
          transformOrigin: "center",
          scrollTrigger: {
            trigger: "#services-divider-wrapper",
            start: "top top",
            end: "25% top", // Adjust the end point to 60% of the element's height
            scrub: true,
          },
          stagger: {
            from: "edges",
            ease: "none",
            each: 0.01,
          },
        }
      )
      .to(
        [
          "#services-divider-wrapper #hexagon-mask-primary",
          "#services-divider-wrapper #hexagon-mask-tertiary",
        ],
        {
          opacity: 0,
          scale: 0.5,
          transformOrigin: "center",
          scrollTrigger: {
            trigger: "#services-divider-wrapper",
            start: "90% 90%",
            end: "100% 90%",
            scrub: true,
          },
          stagger: {
            from: "edges",
            ease: "none",
            each: 0.01,
          },
        }
      );
    gsap
      .timeline()
      .from("#contact-me-button", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#services-divider-wrapper",
          start: "top top",
          end: "25% top",
          scrub: true,
        },
      })
      .to(
        "#contact-me-button",
        {
          x: "-100vw",
          scrollTrigger: {
            trigger: "#services-divider-wrapper",
            start: "80% top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
  }, []);
  return (
    <DividerWrapper id="services-divider-wrapper">
      <TitleBlock id="services-title-block">
        <Title>Services</Title>
        <Subtitle>What I can offer your business.</Subtitle>
        <AnchorButton
          id="contact-me-button"
          href="https://www.linkedin.com/in/christopher-alba/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Contact Me
        </AnchorButton>
        <HexPattern
          primary={theme.colors.tertiary1}
          tertiary={theme.colors.tertiary1}
        />
      </TitleBlock>
      <ContentBlock>
        <ParallaxWrapperFluid id="services-wrapper-2">
          <ParallaxWrapperInnerFluid>
            <ServicesWrapper>
              <PeopleSVG />
              <h1>Working in a software team.</h1>
              <p>
                I am able to work in a full-stack environment. From traditional
                to cloud, monolith to microservices. From vanilla JavaScript,
                HTML, CSS, to fully fledged frontend frameworks like React. I
                will be an asset to your company and can contribute to your
                codebase within the first week.
              </p>
            </ServicesWrapper>
          </ParallaxWrapperInnerFluid>
        </ParallaxWrapperFluid>
        <ParallaxWrapperFluid id="services-wrapper-3">
          <ParallaxWrapperInnerFluid>
            <ServicesWrapper>
              <PersonSVG />
              <h1>Working as a freelancer.</h1>
              <p>
                I can build simple websites on my own, freelance if needed. I
                will handle everything from design, construction, deployment,
                and getting your website on Google. Simple websites include SPA
                marketing websites, websites with simple monolith backend
                architecture and a SPA frontend, or a vanilla HTML, JS, and CSS
                website.
              </p>
            </ServicesWrapper>
          </ParallaxWrapperInnerFluid>
        </ParallaxWrapperFluid>
      </ContentBlock>
    </DividerWrapper>
  );
};

export default Services;
