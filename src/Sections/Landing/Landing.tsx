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

const Landing: FC<{ setTheme: (defaultTheme: DefaultTheme) => void }> = () => {
  return (
    <div>
      <BackgroundDiv>
        <BackgroundOverlay>
          <Container>
            <InfoWrapper>
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
                <Button>What can I offer your business?</Button>
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
