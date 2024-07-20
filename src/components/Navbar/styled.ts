import styled from "styled-components";

export const NavbarDivMain = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  z-index: 1000;
  @media (max-width: 700px) {
    margin-top: 0;
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const ThemeButton = styled.button`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.secondary1};
  border: none;
  cursor: pointer;
  z-index: 1000;
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary1};
  }
  position: relative;
`;
