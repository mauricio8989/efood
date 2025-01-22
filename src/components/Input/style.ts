import styled from "styled-components";
import { colors } from "../../style";
import InputMask from 'react-input-mask';


export const ContainerInput = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const Label = styled.label`
  color: ${colors.begie};

`
export const InputContainer = styled.input`
  width: 100%;
  margin-top: 8px;
  color: #000;
  background-color: ${colors.begie};
  padding: 8px;
  border: transparent;
  font-weight: bold;
  outline: none;
`
