import { Link } from 'react-router-dom'
import { Container, Title, Description, Tag, ContainerTags } from './style'
import { FaStar } from 'react-icons/fa'

export type Props = {
  tags: string[]
  image: string
  title: string
  note: string
  description: string
  food: string[] | string
}

export const Card = ({ tags, image, title, note, description, food }: Props) => {
  return (
    <Container>
      <ContainerTags>
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </ContainerTags>
      <img src={image} />
      <div>
        <Title>
          {' '}
          {title}{' '}
          <span>
            {note} <FaStar />
          </span>
        </Title>
        <Description>{description}</Description>
        <Link to={`/perfil/${food[0]}`}>Saiba mais</Link>
      </div>
    </Container>
  )
}
