import { FC } from "react";
import {
  MainWrapper,
  Progress,
  ProgressWrapper,
  SkillsWrapper,
  SubTitleStyled,
  TitleStyled,
} from "./styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export type Skill = {
  name: string;
  confidence: number;
};

const SkillsDisplay: FC<{
  title: string;
  subTitle: string;
  skills: Skill[];
}> = ({ title, subTitle, skills }) => {
  useGSAP(() => {
    gsap.fromTo(
      "#progress-bar",
      {
        x: "-100%",
      },
      {
        x: 0,
        duration:1,
        stagger: {
          amount: 2,
          from: "start"
        },
        scrollTrigger: {
          trigger: "#main-wrapper",
          start: "40% bottom",
        },
      }
    );
  });
  return (
    <MainWrapper id="main-wrapper">
      <TitleStyled>{title}</TitleStyled>
      <SubTitleStyled>{subTitle}</SubTitleStyled>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <div key={index}>
            <p>
              {skill.name} | {skill.confidence}%
            </p>
            <ProgressWrapper>
              <Progress
                id="progress-bar"
                width={skill.confidence + "%"}
              ></Progress>
            </ProgressWrapper>
          </div>
        ))}
      </SkillsWrapper>
    </MainWrapper>
  );
};

export default SkillsDisplay;
