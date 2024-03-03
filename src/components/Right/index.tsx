import { ReactElement } from "react"
import { Component, Container } from "./style"
type Props ={
  children: ReactElement | boolean
}

export const Right = ({children}:Props) => {
  return(
    <Container>
      <Component>{children}</Component>
    </Container>
  )
}
