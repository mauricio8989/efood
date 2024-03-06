import styled from 'styled-components'
import { HeaderContainer } from '../../components/Header/style'
import { colors } from '../../style'

export const Container = styled.div`
  ${HeaderContainer} {
    padding: 60px 0;
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 0;
    .links {
      width: 100%;
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        img {
          margin: 0 auto;

        }
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
    row-gap: 32px;
  }
`
export const Button = styled.button`
  width: fit-content;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  color: ${colors.salmon};
  font-weight: bold;
`
export const Description = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 280px;
  background-image: url('https://i.ibb.co/sKDTxx3/imagem-de-fundo.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 60px;
  color: ${colors.begie};
  .container{
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

 }
  span{
    font-size: 32px;
    font-weight: 100;
  }
`
