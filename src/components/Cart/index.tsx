import { useSelector } from "react-redux";
import { Button } from "../Button";
import { Comfirm, Container, Plate, Price, Title, Trash, ValueToPay } from "./style"
import { FaRegTrashAlt } from "react-icons/fa";
import { RootReducer } from "../../store";

type Props = {
  onclick: () => void
}
export const Cart = ({onclick}:Props) => {
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)

  const total = itemsCart.reduce((total, produto) => total + produto.value, 0);
  const precoTotal = total.toFixed(2).toString().replace('.', ',')
  return(
    <Container>
      {itemsCart &&
        itemsCart.map((plate) => (
          <Plate key={plate.id}>
            <img src={plate.image} />
            <div>
              <Title>{plate.title}</Title>
              <Trash><FaRegTrashAlt /></Trash>
              <Price>R$ {plate.value}</Price>
            </div>
          </Plate>
          )
        )
      }
      <Comfirm>
        <ValueToPay> <span>Valor total</span>{precoTotal}</ValueToPay>
        <Button onclick={onclick} >Continuar com a entrega</Button>
      </Comfirm>
    </Container>
  )
}
