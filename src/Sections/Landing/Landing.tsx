import { FC } from "react";
import { DefaultTheme } from "styled-components";
import { Container } from "../../components/container";
import {
  Anchor,
  BackgroundDiv,
  BackgroundOverlay,
  Button,
  Highlight,
  InfoContent,
  InfoContentRightAligned,
  InfoWrapper,
  SummaryText,
} from "./styled";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Landing: FC<{ setTheme: (defaultTheme: DefaultTheme) => void }> = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .from("#background-overlay", {
        opacity: 0,
        delay: 1,
        duration: 1.5,
        ease: "none",
      })
      .from("#info-wrapper", {
        opacity: 0,
        duration: 1.5,
        ease: "none",
      });
  }, []);
  return (
    <div>
      <BackgroundDiv>
        <BackgroundOverlay id="background-overlay">
          <Container>
            <InfoWrapper id="info-wrapper">
              <InfoContent>
                <SummaryText>
                  I’m a <Highlight>software engineer</Highlight> at Turners
                  Automotive Group Digital. Focused mainly on frontend
                  engineering, I also have experience building enterprise
                  backend solutions as well as machine learning supported
                  applications.
                </SummaryText>
                <Anchor
                  href="https://www.linkedin.com/in/christopher-alba/"
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  CONTACT ME
                </Anchor>
                <Button
                  onClick={() =>
                    document
                      .getElementById("skills")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  What can I offer your business?
                </Button>
              </InfoContent>
              <InfoContentRightAligned></InfoContentRightAligned>
            </InfoWrapper>
          </Container>
        </BackgroundOverlay>
      </BackgroundDiv>
    </div>
  );
};

export default Landing;
