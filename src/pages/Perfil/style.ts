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
        width: fit-content;
        color: ${colors.salmon};
      }
    }
    :nth-child(2) {
      width: 100%;
      background-image: url('/src/assets/images/italiana.png');
      background-repeat: no-repeat;
      background-size: cover;
      color: ${colors.white};
    }
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`
export const Button = styled.button`
  width: fit-content;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  color: ${colors.salmon};
  font-weight: bold;
  line-height: 22px;
`
export const Description = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 60px;
  color: ${colors.begie};
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
  width: fit-content;
  line-height: 38px;
 }
  span{
    font-size: 32px;
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
