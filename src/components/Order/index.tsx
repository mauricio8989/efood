import { useFormik } from "formik"
import { Button } from "../Button"
import { Container, Last, Thanks, Title } from "./style"
type Props = {
  backToHome: () => void
  orderId: string | undefined
}

export const Order = ({backToHome, orderId}:Props) => {
  return(
    <Container>
      <Title>Pedido realizado - {`{${orderId}}`}</Title>
      <Thanks>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </p>
      </Thanks>
      <Last>
        <Button type="button" onclick={backToHome}>Concluir</Button>
      </Last>
    </Container>
  )
}
