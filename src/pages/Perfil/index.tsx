import { Link, useNavigate, useParams } from 'react-router-dom'
import { CardFood } from '../../components/CardFood'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Button, Container, Description } from './style'
import logo from '../../assets/images/logo.svg'
import { CardFloat } from '../../components/CardFloat'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinhoReducer'
import { Right } from '../../components/Right'
import { Cart } from '../../components/Cart'
import { Delivery } from '../../components/Delivery'
import { Pay } from '../../components/Pay'
import { Order } from '../../components/Order'
import { Plate } from '../../models/plate'
import { useGetRestaurantQuery } from '../../services/api'
import { useState } from 'react'


export const Perfil = () => {
  const {id} = useParams()
  const { data: restaurant} = useGetRestaurantQuery(id!)
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [isDisheOpen, setIsDishOpen] = useState(false)
  const [cartOpen, setCartOpen ] = useState(false)
  const [adress, setAdress ] = useState(false)
  const [pay, setPay] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [plate, setPlate] = useState<Plate>()

  function handleClick(item: Plate){
    setIsDishOpen(true)
    setPlate(item)
  }
  function goToCart(){
    setPay(false)
    setAdress(false)
    setCartOpen(true)
  }
  function goToPay(){
    setAdress(false)
    setCartOpen(false)
    setPay(true)
  }
  function goToAdress(){
    setAdress(true)
    setCartOpen(false)
    setPay(false)
  }
  function goToOrderFinished(){
    setIsFinished(true)
    setPay(false)
  }

  return (
    <Container>
      <Header>
        <div className="links">
          <div className="container">
            <Link to={'/'}>Restaurantes</Link>
            <img src={logo} alt="efood" />
            <Button onClick={goToCart}>
              <span>{itemsCart.length}</span> produto(s) no carrinho
            </Button>
          </div>
        </div>
        <Description style={{backgroundImage: `url(${restaurant?.capa})`}}>
          <div className="container">
            <span>{restaurant?.tipo}</span>
            <h3>{restaurant?.titulo}</h3>
          </div>
        </Description>
      </Header>
      <div className="container">
        {restaurant && restaurant.cardapio.map(plate =>(
          <CardFood
            key={plate.id}
            plate={plate}
            onclick={() => handleClick(plate)}
          />
        ))}
      </div>
      {isDisheOpen &&
        plate &&
          <CardFloat
            plate={plate}
            AddCart={() => dispatch(adicionar(plate))}
            onclose={()=> setIsDishOpen(false)}
          />
      }
      {cartOpen &&<Right onclick={() => setCartOpen(false)}><Cart onclick={goToAdress}/></Right>}
      {adress && <Right onclick={() => setAdress(false)}><Delivery onPay={goToPay} onBackToCart={goToCart}/></Right>}
      {pay && <Right onclick={() => setPay(false)}><Pay onPay={goToOrderFinished} onBack={goToAdress}/></Right> }
      {isFinished && <Right onclick={() => setIsFinished(false)}><Order backToHome={() =>navigate('/')}/></Right> }
      <Footer />
    </Container>
  )
}
