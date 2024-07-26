import styled from "styled-components";
import { Subtitle, Title } from "../../components/title";

export const NameWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-top: 15vh;
  margin-bottom: 5vh;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`;

export const TitleStyled = styled(Title)`
  font-size: 4rem;
  @media (max-width: 1600px) {
    font-size: 3rem;
  }
  @media (max-width: 1250px) {
    font-size: 2rem;
  }
  @media (max-width: 1050px) {
    font-size: 1.75rem;
  }
`;

export const SubTitleStyled = styled(Subtitle)`
  margin-bottom: 9px;
  font-weight: 800;
  @media (max-width: 1600px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1250px) {
    font-size: 1rem;
  }
  @media (max-width: 1050px) {
    font-size: 0.8rem;
  }
`;

export const SubTitleStyledThin = styled(Subtitle)`
  font-weight: 200;
  margin-bottom: 9px;
  @media (max-width: 1600px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1250px) {
    font-size: 1rem;
  }
  @media (max-width: 1050px) {
    font-size: 0.8rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding-top: 100px;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const InfoContent = styled.div`
  flex: 1;
  flex-grow: 1;
  @media (max-width: 1300px) {
    text-align: center;
  }
`;
export const InfoContentRightAligned = styled.div`
  flex: 1;
  flex-grow: 1;
  text-align: right;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
`;
export const SummaryText = styled.p`
  font-size: 2rem;
  @media (max-width: 1600px) {
    font-size: 1.7rem;
  }
  @media (max-width: 1250px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1050px) {
    font-size: 1.3rem;
  }
`;

export const Button = styled.button`
  padding: 20px 50px;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  border: none;
  border-radius: 10px;
  margin-left: auto;
  margin-top: 30px;
  display: block;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 1300px) {
    margin: 10px auto;
  }
`;

export const Anchor = styled.a`
  font-size: 2rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.secondary1};
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1600px) {
    font-size: 1.7rem;
  }
  @media (max-width: 1250px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1050px) {
    font-size: 1.3rem;
  }
`;

export const Highlight = styled.span`
  font-weight: 800;
`;

export const BackgroundDiv = styled.div`
  background: url("./images/grad-photo-web.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: 11vh;
  height: 70vh;
  position: relative;
  clip-path: polygon(50% 0%, 79% 0, 100% 0, 100% 91%, 79% 91%, 50% 100%, 21% 91%, 0 91%, 0 0, 21% 0);  padding: 200px 0;

`;

export const BackgroundOverlay = styled.div`
  background: ${({ theme }) => theme.colors.primary1 + "99"};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
