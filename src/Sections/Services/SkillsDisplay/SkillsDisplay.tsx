import { FC } from "react";
import { MainWrapper, Progress, ProgressWrapper, SkillsWrapper, SubTitleStyled, TitleStyled } from "./styled";

export type Skill = {
  name: string;
  confidence: number;
};

const SkillsDisplay: FC<{
  title: string;
  subTitle: string;
  skills: Skill[];
}> = ({ title, subTitle, skills }) => {
  return (
    <MainWrapper>
      <TitleStyled>{title}</TitleStyled>
      <SubTitleStyled>{subTitle}</SubTitleStyled>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <div key={index}>
            <p>
              {skill.name} | {skill.confidence}%
            </p>
            <ProgressWrapper>
              <Progress style={{ width: skill.confidence + "%" }}></Progress>
            </ProgressWrapper>
          </div>
        ))}
      </SkillsWrapper>
    </MainWrapper>
  );
};

export default SkillsDisplay;
