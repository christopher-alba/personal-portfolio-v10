import { FC, useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ParallaxWrapper,
  ParallaxWrapperInner,
} from "../../components/parallaxWrapper";
import {
  ExploreButton,
  HeroText,
  HexPattern,
  LandingWrapper,
  WelcomeContent,
  WelcomeWrapper,
} from "./styled";
import { ThemeContext } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const Landing: FC = () => {
  const theme = useContext(ThemeContext) as DefaultTheme;
  useGSAP(() => {
    gsap.fromTo(
      "#welcome-wrapper",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: "#welcome-wrapper",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
  useGSAP(() => {
    gsap.from("#welcome-content", {
      opacity: 0,
      x: -200,
    });
    gsap.fromTo(
      "#scrollTriggerLanding",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    gsap
      .timeline()
      .from(["#hexagon-mask-primary", "#hexagon-mask-tertiary"], {
        opacity: 0,
        scale: 0.5,
        y: -100,
        transformOrigin: "center",
        scrollTrigger: {
          trigger: "#scrollTriggerLanding",
          start: "top top",
          end: "bottom bottom", // Adjust the end point to 60% of the element's height
          scrub: true,
        },
        stagger: {
          from: "random",
          ease: "none",
          each: 0.01,
        },
      })
      .to(["#hexagon-mask-primary", "#hexagon-mask-tertiary"], {
        opacity: 0,
        scale: 0.5,
        y: -100,
        transformOrigin: "center",
        scrollTrigger: {
          trigger: "#scrollTriggerLanding",
          start: "90% 90%",
          end: "120% 90%",
          scrub: true,
        },
        stagger: {
          from: "edges",
          ease: "none",
          each: 0.01,
        },
      });

    gsap
      .timeline()
      .from("#landing-wrapper", {
        scrollTrigger: {
          trigger: "#scrollTriggerLanding",
          start: "15% top",
          end: "50% top",
          scrub: true,
        },
        opacity: 0,
      })
      .fromTo(
        "#hero-text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        "#welcome-text",
        {
          y: "200px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
  });

  function scrollToBottom(duration: number) {
    const totalScrollDistance =
      document.documentElement.scrollHeight - window.innerHeight;
    const startTime = performance.now();

    function scrollStep(timestamp: number) {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(0, progress * totalScrollDistance);
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  return (
    <div>
      <ParallaxWrapper id="scrollTriggerLanding">
        <WelcomeWrapper id="welcome-wrapper">
          <WelcomeContent id="welcome-content">
            <h1>Hi there!</h1>
            <p>
              If you don't want to scroll through just click the button and it
              will slowly scroll for you. To cancel the auto scrolling just
              refresh the page.
            </p>
            <ExploreButton onClick={() => scrollToBottom(20000)}>
              Tour my website!
            </ExploreButton>
          </WelcomeContent>
        </WelcomeWrapper>
        <ParallaxWrapperInner>
          <HexPattern
            primary={theme.colors.secondary2}
            tertiary={theme.colors.tertiary1}
          />
          <LandingWrapper id="landing-wrapper">
            <HeroText id="hero-text">Christopher Alba</HeroText>
            <h2 id="welcome-text">Welcome to my website.</h2>
          </LandingWrapper>
        </ParallaxWrapperInner>
      </ParallaxWrapper>
    </div>
  );
};

export default Landing;
