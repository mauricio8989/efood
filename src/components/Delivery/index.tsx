import { useFormik } from "formik"
import { Button } from "../Button"
import { Input } from "../Input"
import { CepNumber, Container, Last, Title } from "./style"
type Props = {
  onPay: () => void
  onBackToCart: () => void
}

export const Delivery = ({onBackToCart, onPay}:Props) => {
  const form = useFormik({
    initialValues: {
      quem_ira_receber: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
    },
    onSubmit: (values) => {
      console.log(values)
      onPay()
    },
  })

  return(
    <Container>
      <Title>Entrega</Title>
      <Input label="Quem irá receber" name="quem_ira_receber" value={form.values.quem_ira_receber} onchange={form.handleChange} onblur={form.handleBlur}/>
      <Input label="Endereço" name="endereco" value={form.values.endereco} onchange={form.handleChange} onblur={form.handleBlur}/>
      <Input label="Cidade" name="cidade" value={form.values.cidade} onchange={form.handleChange} onblur={form.handleBlur}/>
      <CepNumber>
        <Input label="CEP" name="cep" value={form.values.cep} onchange={form.handleChange} onblur={form.handleBlur}/>
        <Input label="Número" name="numero" value={form.values.numero} onchange={form.handleChange} onblur={form.handleBlur}/>
      </CepNumber>
      <Input label="Complemento (opcional)" name="complemento" value={form.values.complemento} onchange={form.handleChange} onblur={form.handleBlur}/>
      <Last>
        <Button type="button" onclick={onPay}>Continuar com o pagamento</Button>
        <Button type="button" onclick={onBackToCart}>Voltar para o carrinho</Button>
      </Last>
    </Container>
  )
}
