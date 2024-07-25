import { FC } from "react";
import SkillsDisplay from "./SkillsDisplay/SkillsDisplay";
import { freelance, softSkills, techStack } from "./data";
import { Container } from "../../components/container";
import {
  Description,
  DescriptionBackground,
  DescriptionWrapper,
  PeopleSVG,
  PersonSVG,
  SkillsWrapper,
  SkillWrapper,
} from "./styled";
const Services: FC = () => {
  return (
    <>
      <Container>
        <SkillsWrapper>
          <SkillWrapper>
            <SkillsDisplay
              title="My Tech Stack"
              subTitle="Some Technologies and Confidence"
              skills={techStack}
            />
          </SkillWrapper>
          <SkillWrapper>
            <SkillsDisplay
              title="My Soft Skills"
              subTitle="Some soft skills and confidence"
              skills={softSkills}
            />
          </SkillWrapper>
          <SkillWrapper>
            <SkillsDisplay
              title="As a freelancer"
              subTitle="Services and Confidence"
              skills={freelance}
            />
          </SkillWrapper>
        </SkillsWrapper>
      </Container>
      <DescriptionBackground>
        <Container>
          <DescriptionWrapper>
            <Description>
              <PeopleSVG />
              <h2>Working in a team.</h2>
              <p>
                I am able to work in a full-stack environment. From traditional
                to cloud, monolith to microservices. From vanilla JavaScript,
                HTML, CSS, to fully fledged frontend frameworks like React. I
                will be an asset to your company and can contribute to your
                codebase within the first week.
              </p>
            </Description>
            <Description>
              <PersonSVG />
              <h2>Working as a freelancer.</h2>
              <p>
                I can build simple websites on my own, freelance if needed. I
                will handle everything from design, construction, deployment,
                and getting your website on Google. Simple websites include SPA
                marketing websites, websites with simple monolith backend
                architecture and a SPA frontend, or a vanilla HTML, JS, and CSS
                website.
              </p>
            </Description>
          </DescriptionWrapper>
        </Container>
      </DescriptionBackground>
    </>
  );
};

export default Services;
