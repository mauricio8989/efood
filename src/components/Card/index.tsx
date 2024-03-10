import { Link } from 'react-router-dom'
import { Container, Title, Description, Tag, ContainerTags } from './style'
import { FaStar } from 'react-icons/fa'

export type Props = {
  id: number
  capa: string
  titulo: string
  avaliacao: number
  description: string
  tipo: string
  destacado: boolean
}

export const Card = ({ id, destacado, capa, titulo, avaliacao, description, tipo}: Props) => {
  function formatDescription(description: string){
    if(description.length < 234) return description
    return (description.slice(0, 234) + '...')
  }
  return (
    <Container>
      <ContainerTags>
        {destacado && <Tag>Em destaque</Tag> }
        <Tag>{tipo}</Tag>
      </ContainerTags>
      <img src={capa} />
      <div>
        <Title>
          {' '}
          {titulo}{' '}
          <span>
            {avaliacao} <FaStar />
          </span>
        </Title>
        <Description>{formatDescription(description)}</Description>
        <Link to={`/perfil/${id}`}>Saiba mais</Link>
      </div>
    </Container>
  )
}
