import styled from "styled-components";

export const MainWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const TitleStyled = styled.h1`
  font-size: 3rem;
  @media (max-width: 1600px) {
    font-size: 2.75;
  }
  @media (max-width: 1250px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1050px) {
    font-size: 2.25rem;
  }
  margin: 0;
  scale: 0.7;
`;

export const SubTitleStyled = styled.h1`
  font-size: 1.3rem;
  scale: 0.7;
  font-weight: 300;
  @media (max-width: 1600px) {
    font-size: 1.25;
  }
  @media (max-width: 1250px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1050px) {
    font-size: 1.15rem;
  }
  margin: 0;
`;

export const ProgressWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary1 + "11"};
  height: 3px;
  width: 100%;
  border-left: 20px solid ${({ theme }) => theme.colors.secondary1 + "11"};
  border-right: 20px solid ${({ theme }) => theme.colors.secondary1 + "11"};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 30px;
  overflow: hidden;
`;
interface props {
  width: string;
}
export const Progress = styled.div<props>`
  background: ${({ theme }) => theme.colors.tertiary1};
  height: 10px;
  width: ${({ width }) => width};
`;

export const SkillsWrapper = styled.div`
  margin-top: 50px;
`;
