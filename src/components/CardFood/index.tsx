import { Button, Container, Description, Title } from './style'
type Props = {
  onclick: () => void
  plate: {
    foto: string,
    nome: string,
    descricao: string,
  }
}

export const CardFood = ({onclick, plate}:Props) => {
  function formatDescription(description: string){
    if(description.length < 120) return description
    return description.slice(0, 120) + '...'
  }
  return (
    <Container>
      <img src={plate.foto} alt="pizza" />
      <Title>{plate.nome}</Title>
      <Description>{formatDescription(plate.descricao)}</Description>
      <Button onClick={onclick}>Adicionar ao carrinho</Button>
    </Container>
  )
}
