import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { Comfirm, Container, PlateComponent, Price, Title, Trash, ValueToPay } from "./style"
import { FaRegTrashAlt } from "react-icons/fa";
import { RootReducer } from "../../store";
import { remover } from '../../store/reducers/carrinhoReducer'
import FormatPrice from "../../utils/FormatPrice";


type Props = {
  onclick: () => void
}
export const Cart = ({onclick}:Props) => {
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)

  const dispatch = useDispatch()

  const total: number = itemsCart.reduce((acumulator, currentValue) => {
    return (acumulator += currentValue.preco)
  },0);

  return(
    <Container>
      {itemsCart &&
        itemsCart.map((plate) => (
          <PlateComponent key={plate.id}>
            <img src={plate.foto} />
            <div>
              <Title>{plate.nome}</Title>
              <Trash onClick={() => dispatch(remover(plate))}><FaRegTrashAlt /></Trash>
              <Price>{FormatPrice(plate.preco)}</Price>
            </div>
          </PlateComponent>
          )
        )
      }
      <Comfirm>
        <ValueToPay> <span>Valor total</span>{FormatPrice(total)}</ValueToPay>
        <Button onclick={onclick} >Continuar com a entrega</Button>
      </Comfirm>
    </Container>
  )
}
