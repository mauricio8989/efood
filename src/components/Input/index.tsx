import { ContainerInput, Label, InputContainer } from "./style"
import InputMask from 'react-input-mask';

type Props = {
  label: string
  name: string
  value: string
  onchange: (event: React.FormEvent<HTMLInputElement>) => void
  onblur: (event: React.FormEvent<HTMLInputElement>) => void
}
export const Input = ({label, name, value, onchange, onblur}:Props) =>{
  return(
    <ContainerInput>
      <Label>{label}</Label>
      <InputContainer name={name} value={value} onChange={onchange} onBlur={onblur} />
    </ContainerInput>
  )
}
