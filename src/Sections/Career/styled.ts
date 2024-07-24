import styled from "styled-components";

export const CareerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const TitleBlock = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 60vw;
  padding-left: 10vw;
  color: ${({ theme }) => theme.colors.primary1};
  background: ${({ theme }) => theme.colors.tertiary1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%);
`;

export const TechOuterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin-top: 50px;
`;

export const TechWrapper = styled.div`
  margin: 10px 0;
`;

export const ProgressBarOuter = styled.div`
  width: 200px;
  height: 5px;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: start;
  border-left: 10px solid gray;
  border-right: 10px solid gray;
`;

export const ProgressBarInner = styled.div`
  height: 7px;
  background: ${({ theme }) => theme.colors.tertiary1};
`;
