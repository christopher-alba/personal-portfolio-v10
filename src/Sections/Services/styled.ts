import styled from "styled-components";
import people from "../../assets/svg/people.svg?react";
import person from "../../assets/svg/person.svg?react";
import HexagonPattern1 from "../../assets/svg-components/HexagonPattern1";

export const ServicesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const DividerWrapper = styled.div`
  margin-top: 200px;
`;

export const DividerOverlay = styled.div`
  display: flex;
  position: relative;
`;

export const TitleBlock = styled.div`
  position: sticky;
  top: 0;
  opacity: 1;
  height: 100vh;
  width: 60vw;
  padding-right: 10vw;
  color: ${({ theme }) => theme.colors.primary1};
  background: ${({ theme }) => theme.colors.tertiary1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 0 0);
`;

export const ContentBlock = styled.div`
  width: 50vw;
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

export const HexPattern = styled(HexagonPattern1)`
  width: 100vw;
  height: 150vh;
  position: absolute;
  top: -25%;
  left: -25%;
  z-index: -1;
`;

export const AnchorButton = styled.a`
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  padding: 10px 50px;
  border-radius: 5px;
  margin-top: 50px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary3};
  }
`;
