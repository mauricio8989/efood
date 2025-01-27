import styled from 'styled-components'
import { colors } from '../../style'
import fundo from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  max-width: 100vw !important;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${colors.salmon};
  position: relative;
  gap: 138px;
  h1 {
    max-width: 100vw;
    font-size: 2rem;
    line-height: 46px;
    width: 540px;
    text-align: center;
  }
  @media (max-width: 1032px){
    gap: 50px;
  }
`
