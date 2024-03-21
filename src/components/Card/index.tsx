import { useNavigate } from 'react-router-dom'
import { Container, Title, Description, Tag, ContainerTags, LinkToPlates } from './style'
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
  const navigate = useNavigate()

  function formatDescription(description: string){
    if(description.length < 234) return description
    return (description.slice(0, 234) + '...')
  }
  function handleClick(){
    navigate(`/perfil/${id}`)
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
        <LinkToPlates onClick={handleClick}>Saiba mais</LinkToPlates>
      </div>
    </Container>
  )
}
