import styled from "styled-components";

export const ParallaxWrapper = styled.div`
  height: 300vh;
  position: relative;
  top: 0px;
  width: 100vw;
`;

export const ParallaxWrapperInner = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  overflow: hidden;
`;

export const ParallaxWrapperFluid = styled.div`
  height: 300vh;
  position: relative;
  top: 0px;
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
