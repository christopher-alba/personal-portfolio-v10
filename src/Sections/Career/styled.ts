import styled from "styled-components";

export const TimelineCard = styled.div`
  padding: 50px;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    height: 100px;
    width: 50px;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    position: absolute;
    top: -200px;
    left: calc(50% - 25px);
    background: ${({ theme }) => theme.colors.secondary1};
  }
  @media (max-width: 1000px){
    padding: 0;
    margin-bottom: 50px;
    &::before {
      content: none;
    }
  }
`;

export const TimelineCardsWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 50%;
  cursor: pointer;
`;
export const CareerWrapper = styled.div`
  padding-bottom: 200px;
  padding: 200px 0;
  padding-top: 100px;
  position: relative;
  top: -1px;
  background: ${({ theme }) => theme.colors.primary2};
`;
export const TimelineWrapper = styled.div`
  overflow: hidden;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Timeline = styled.div`
  width: 100vw;
  height: 30px;
  background: ${({ theme }) => theme.colors.secondary1};
  margin-bottom: 170px;
`;

export const Date = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: absolute;
  width: 100%;
  top: -70px;
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: 1000px) {
    position: relative;
    top: 0;
    margin-bottom: 0;
  }
`;

export const TimelineCardOuter = styled.div`
  width: 400px;
  position: relative;
  box-sizing: border-box;
  margin-right: 50px;
  &:first-of-type {
    ${Date} {
      color: ${({ theme }) => theme.colors.tertiary1};
    }
    ${TimelineCard}::before {
      background: ${({ theme }) => theme.colors.tertiary1};
    }
  }
`;

export const Pill = styled.div`
  padding: 3px 5px;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  display: inline-block;
  border-radius: 2px;
  margin: 2px;
  font-size: 0.6rem;
`;

export const HistoryList = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const HistoryCard = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  &:first-of-type {
    ${Date} {
      color: ${({ theme }) => theme.colors.tertiary1};
    }
  }
`;
