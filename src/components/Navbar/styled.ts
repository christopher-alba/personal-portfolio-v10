import styled from "styled-components";
import { Title } from "../title";

export const NavbarDivMain = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  z-index: 1000;
  @media (max-width: 700px) {
    margin-top: 0;
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const ThemeButton = styled.button`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  justify-content: center;
  background: transparent;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary1};
  border: none;
  cursor: pointer;
  z-index: 1000;
  &:hover {
    opacity: 0.7;
  }
  position: relative;
`;

export const ThemeText = styled.span`
  margin-right: 20px;
  font-weight: 800;
  @media (max-width: 900px) {
    font-size: 0.8rem;
    margin-right: 5px;
  }
`;

export const TitleStyled = styled(Title)`
  font-size: 2rem;
  font-family: "Italianno";
  @media (max-width: 900px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Anchor = styled.button`
  margin: 0 20px;
  font-weight: 800;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary1};
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 900px) {
    font-size: 0.8rem;
    margin: 0 5px;
  }
`;
