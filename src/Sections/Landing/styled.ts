import styled from "styled-components";
import HexagonPattern1 from "../../assets/svg-components/HexagonPattern1";

export const LandingWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary1};
  flex-direction: column;
  height: 70vh;
  top: 15vh;
  width: 40vw;
  margin-left: auto;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  margin-right: auto;
`;

export const HeroText = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

export const HexPattern = styled(HexagonPattern1)`
  width: 150vw;
  height: 150vh;
  position: absolute;
  top: -25%;
  left: -25%;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: end;
  width: 100vw;
  background: url("./images/grad-photo-web.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;

export const WelcomeContent = styled.div`
  background: ${({ theme }) => theme.colors.primary1};
  padding: 50px 100px;
  width: 300px;
  margin: 50px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;
export const ExploreButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  padding: 10px 50px;
  border: none;
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary3};
  }
`;
