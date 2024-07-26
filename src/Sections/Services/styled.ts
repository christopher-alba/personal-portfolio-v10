import styled from "styled-components";
import people from "../../assets/svg/people.svg?react";
import person from "../../assets/svg/person.svg?react";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 250px;
  padding-bottom: 250px;
`;

export const SkillWrapper = styled.div`
  flex-grow: 1;
  padding: 50px;
  box-sizing: border-box;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary1 + "33"};
  &:last-of-type {
    border-right: none;
  }
  @media (max-width: 1700px) {
    border: none;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding-top: 100px;
`;

export const Description = styled.div`
  flex-grow: 1;
  max-width: 50%;
  min-width: 300px;
  flex: 1;
  text-align: center;
  padding: 50px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 25px;
  }
`;

export const DescriptionBackground = styled.div`
  background: ${({ theme }) => theme.colors.primary2};
  clip-path: polygon(50% 10%, 79% 0, 100% 0, 100% 100%, 79% 100%, 50% 100%, 21% 100%, 0 100%, 0 0, 21% 0);  padding: 200px 0;
`;

export const PeopleSVG = styled(people)`
  width: 70%;
  height: fit-content;
  &:hover {
    transform: scale(1.1);
  }
  transition: 500ms;
`;

export const PersonSVG = styled(person)`
  width: 70%;
  height: fit-content;
  &:hover {
    transform: scale(1.1);
  }
  transition: 500ms;
`;
