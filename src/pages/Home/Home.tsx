import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './style'
import logo from '../../assets/images/logo.svg'
import { Plate } from '../../models/plate'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  capa: string
  titulo: string
  descricao: string
  destacado: boolean
  tipo: string
  avaliacao: number
  cardapio: Plate[]
}

export const Home = () => {
  const {data: restaurants} = useGetRestaurantsQuery()

  return (
    <>
      <Header>
        <img src={logo} alt="efood" />
        <div>
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </Header>
      <Container className="container">
        {restaurants && restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            destacado={restaurant.destacado}
            capa={restaurant.capa}
            tipo={restaurant.tipo}
            avaliacao={restaurant.avaliacao}
            titulo={restaurant.titulo}
            description={restaurant.descricao}
          />
        ))}
      </Container>
      <Footer />
    </>
  )
}
