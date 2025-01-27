import styled from 'styled-components'
import { colors } from '../../style'

export const Container = styled.footer`
  background-color: ${colors.begie};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Sotials = styled.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0 80px 0;

`
export const Link = styled.a`
  text-decoration: none;
`
export const Description = styled.p`
  max-width: 480px;
  color: ${colors.salmon};
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`
