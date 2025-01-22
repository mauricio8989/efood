import { useFormik, yupToFormErrors } from "formik"
import { Button } from "../Button"
import { Input } from "../Input"
import { ContainerInput, Label } from "../Input/style"
import * as Yup from "yup"
import InputMask from 'react-input-mask';
import { CepNumber, Container, Last, NumberAndCvv, Title } from "./style"

type Props = {
  onPay: () => void
  onBack: () => void
}
export const Pay = ({onPay, onBack}:Props) => {
  const form = useFormik({
    initialValues: {
      nome_no_cartao: '',
      numero_do_cartao: '',
      cvv: '',
      mes_vencimento: '',
      ano_vencimento: '',
    },
    validationSchema: Yup.object({
      nome_no_cartao: Yup.string().min(5, "este nome precisa ter pelomenos 5 caracteres.").required("o campo é obrigatorio"),
      numero_do_cartao: Yup.string().min(16).matches(/^[0-9]{16}$/, "número do cartão inválido.").required("o campo é obrigatorio"),
      cvv: Yup.string().matches(/^[0-9]{3}$/, "cvv inválido.").required("o campo é obrigatorio"),
      mes_vencimento: Yup.string().matches(/^[0-9]{2}$/, "mês de vencimento inválido.").required("o campo é obrigatorio"),
    }),
    onSubmit: (values) => {
      console.log(values)
      onPay()
    },
  })
  return(
    <Container>
      <Title>Pagamento - Valor a pagar R$ <span>190,90</span></Title>
      <Input label="Nome no cartão" name="nome_no_cartao" value={form.values.nome_no_cartao} onchange={form.handleChange} onblur={form.handleBlur} />
      <NumberAndCvv>
        {/* <ContainerInput>
          <Label htmlFor="numero_do_cartao">Número do cartão</Label>
          <InputMask mask="9999 9999 9999 9999" placeholder="Número do cartão" name="numero_do_cartao" value={form.values.numero_do_cartao} onChange={form.   handleChange} onBlur={form.handleBlur} id="numero_do_cartao" />
        </ContainerInput> */}
        <Input label="Número do cartão" name="numero_do_cartao" value={form.values.numero_do_cartao} onchange={form.handleChange} onblur={form.handleBlur} />
        <Input label="CVV" name="cvv" value={form.values.cvv} onchange={form.handleChange} onblur={form.handleBlur} />
      </NumberAndCvv>
      <CepNumber>
        <Input label="Mês de vencimento" name="mes_vencimento" value={form.values.mes_vencimento} onchange={form.handleChange} onblur={form.handleBlur} />
        <Input label="Ano de vencimento" name="ano_vencimento" value={form.values.ano_vencimento} onchange={form.handleChange} onblur={form.handleBlur} />
      </CepNumber>
      <Last>
        <Button type="submit" onclick={onPay}>Finalizar pagamento</Button>
        <Button type="button" onclick={onBack}>Voltar para a edição de endereço</Button>
      </Last>
    </Container>
  )
}
