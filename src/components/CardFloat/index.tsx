import { Title } from "../Card/style"
import { Button } from "../CardFood/style"
import { ButtonClose, Card, Container } from "./style"
import { IoClose } from "react-icons/io5";
import { Plate } from "../../models/plate";
import FormatPrice from "../../utils/FormatPrice";
type Props = {
  onclose: () => void
  AddCart: () => void
  plate: Plate
}

export const CardFloat = ({ plate, AddCart, onclose}:Props) =>{
  return(
    <Container>
      <Card>
        <ButtonClose onClick={onclose}><IoClose /></ButtonClose>
        <img src={plate.foto} alt="pizza" />
        <div>
          <div>
            <Title>{plate.nome}</Title>
            <p>{plate.descricao}</p>
            <span>Serve de {plate.porcao}</span>
          </div>
          <Button onClick={AddCart}>Adicionar ao carrinho - {FormatPrice(plate.preco)}</Button>
        </div>
      </Card>
    </Container>
  )
}
