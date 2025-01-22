import styled from 'styled-components'
import { HeaderContainer } from '../../components/Header/style'
import { colors } from '../../style'

export const Container = styled.div`

  ${HeaderContainer} {
    padding: 60px 0;
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 0;
    gap: 0;
    .links {
      width: 100%;
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
      }
      a {
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
        width: fit-content;
        color: ${colors.salmon};
      }
    }
    :nth-child(2) {
      width: 100%;
      background-image: url('/src/assets/images/italiana.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`
export const ButtonCart = styled.button`
  width: fit-content;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
`
export const Description = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 60px;
  color: ${colors.white};
  position: relative;
  .container{
    padding: 24px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
 }
 span, h3{
  font-size: 32px;
  width: fit-content;
  line-height: 38px;
 }
  span{
    font-weight: 100;
  }
  &::after{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    content: '';
  }
`

export const ContainerDelivery = styled.div`
  font-size: 14px;
`
export const Title = styled.h2`
  color: ${colors.begie};
  font-size: 16px;
  margin-bottom: 16px;
`
export const CepNumber = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
`
export const Last = styled.div`
  margin-top: 24px;
`

export const ContainerInput = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const Label = styled.label`
  color: ${colors.begie};

`
export const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  color: #000;
  background-color: ${colors.begie};
  padding: 8px;
  border: transparent;
  font-weight: bold;
  outline: none;
`
export const ContainerPay = styled.div`
  font-size: 14px;
`
export const NumberAndCvv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 34px;
`

