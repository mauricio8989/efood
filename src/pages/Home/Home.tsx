import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './style'
import logo from '../../assets/images/logo.svg'
import { useEffect, useState } from 'react'
import { Plate } from '../../models/plate'

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setRestaurants(res))
  },[])
  return (
    <>
      <Header>
        <img src={logo} alt="efood" />
        <div>
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </Header>
      <Container className="container">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            destacado={restaurant.destacado}
            capa={restaurant.capa}
            tipo={restaurant.tipo}
            avaliacao={restaurant.avaliacao}
            titulo={restaurant.titulo}
            description={restaurant.descricao}
            perfil={restaurant.tipo}
          />
        ))}
      </Container>
      <Footer />
    </>
  )
}
