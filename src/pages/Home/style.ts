import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  column-gap: 80px;

  @media (max-width: 1032px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px !important;
  }
`
