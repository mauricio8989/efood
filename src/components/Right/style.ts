import styled from "styled-components";
import { colors } from "../../style";
export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: calc(100% -360px) 360px;
  z-index: 1;
`
export const Component = styled.div`
  width: 360px;
  height: 100vh;
  background-color: ${colors.salmon};
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px 8px;
`
