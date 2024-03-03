import { Container } from "./style"
type Props = {
  children: string
  onclick: () => void
  type: string
}
  export const Button = ({children, type, onclick}:Props) =>{
  return(<Container onClick={onclick} type={type}>{children}</Container>)
}

