import { Container } from "./style"
type Props = {
  children: string
  onclick?: () => void
  type: "button" | "submit" | "reset" | undefined
  state?: boolean
}
  export const Button = ({children, onclick, type, state}:Props) =>{
  return(<Container disabled={state} type={type} onClick={onclick} >{children}</Container>)
}

