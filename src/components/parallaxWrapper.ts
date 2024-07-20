import styled from "styled-components";

export const ParallaxWrapper = styled.div`
  height: 500vh;
  position: relative;
  opacity: 0;
  top: 0px;
  width: 100vw;
`;

export const ParallaxWrapperInner = styled.div`
  width: 100vw;
  height: fit-content;
  position: sticky;
  left: 0;
  top: 0;
`;

export const ParallaxWrapperFluid = styled.div`
  height: 500vh;
  position: relative;
  top: 0px;
  opacity: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const ParallaxWrapperInnerFluid = styled.div`
  width: 100%;
  height: fit-content;
  position: sticky;
  left: 0;
  padding: 0 20%;
  box-sizing: border-box;
  top: 0;
`;
