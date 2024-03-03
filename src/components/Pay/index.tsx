import { Button } from "../Button"
import { Input } from "../Input"
import { CepNumber, Container, Last, NumberAndCvv, Title } from "./style"
type Props = {
  onPay: () => void
  onBack: () => void
}
export const Pay = ({onPay, onBack}:Props) => {
  return(
    <Container>
      <Title>Pagamento - Valor a pagar R$ <span>190,90</span></Title>
      <Input required label="Nome no cartão"/>
      <NumberAndCvv>
        <Input required label="Número do cartão"/>
        <Input required label="CVV"/>
      </NumberAndCvv>
      <CepNumber>
        <Input required label="Mês de vencimento"/>
        <Input required label="Ano de vencimento"/>
      </CepNumber>
      <Last>
        <Button onclick={onPay}>Finalizar pagamento</Button>
        <Button onclick={onBack}>Voltar para a edição de endereço</Button>
      </Last>
    </Container>
  )
}
