import { FC, useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
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
  NameWrapper,
  SubTitleStyled,
  SubTitleStyledThin,
  SummaryText,
  TitleStyled,
} from "./styled";

const Landing: FC<{ setTheme: (defaultTheme: DefaultTheme) => void }> = ({
  setTheme,
}) => {
  const theme = useContext(ThemeContext) as DefaultTheme;
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
