import { Link, useNavigate, useParams } from 'react-router-dom'
import { CardFood } from '../../components/CardFood'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ButtonCart, CepNumber, Container, ContainerDelivery, ContainerInput, ContainerPay, Description, Input, Label, Last, NumberAndCvv, Title } from './style'
import { Button } from '../../components/Button'
import logo from '../../assets/images/logo.svg'
import { CardFloat } from '../../components/CardFloat'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinhoReducer'
import { Right } from '../../components/Right'
import { Cart } from '../../components/Cart'
import { Order } from '../../components/Order'
import { Plate } from '../../models/plate'
import { useGetRestaurantQuery } from '../../services/api'
import { useState } from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import InputMask from "react-input-mask";




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

    const form = useFormik({
      initialValues: {
        quem_ira_receber: '',
        endereco: '',
        cidade: '',
        cep: '',
        numero: '',
        complemento: '',
        nome_no_cartao: '',
        numero_do_cartao: '',
        cvv: '',
        mes_vencimento: '',
        ano_vencimento: '',
      },
      validationSchema: Yup.object({
        quem_ira_receber: Yup.string().min(5, "este nome precisa ter pelomenos 5 caracteres.").required("o campo é obrigatorio"),
        endereco: Yup.string().min(10, "este endereço precisa ter pelomenos 10 caracteres.").required("o campo é obrigatorio"),
        cidade: Yup.string().min(5, "esta cidade precisa ter pelomenos 5 caracteres.").required("o campo é obrigatorio"),
        cep: Yup.string().matches(/^[0-9]{5}-[0-9]{3}$/, "cep inválido.").required("o campo é obrigatorio"),
        numero: Yup.string().min(1, "este número precisa ter pelomenos 1 caracter.").required("o campo é obrigatorio"),
        nome_no_cartao: Yup.string().min(5, "este nome precisa ter pelomenos 5 caracteres.").required("o campo é obrigatorio"),
        numero_do_cartao: Yup.string().min(16).matches(/^[0-9]{16}$/, "número do cartão inválido.").required("o campo é obrigatorio"),
        cvv: Yup.string().matches(/^[0-9]{3}$/, "cvv inválido.").required("o campo é obrigatorio"),
        mes_vencimento: Yup.string().matches(/^[0-9]{2}$/, "mês de vencimento inválido.").required("o campo é obrigatorio"),
        ano_vencimento: Yup.string().matches(/^[0-9]{4}$/, "ano de vencimento inválido.").required("o campo é obrigatorio"),
      }),
      onSubmit: (values) => {
        console.log(values)
      },
    })

    const checkInputHasError = (fieldname: string) => {
      const isTouched = fieldname in form.touched;
      const isInvalid = fieldname in form.errors;
      const hasError = isInvalid && isTouched;

      return hasError;
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, input: string) => {
      const { value } = event.target;
      form.setFieldValue(input, value);
    };

  return (
    <Container>
      <Header>
        <div className="links">
          <div className="container">
            <Link to={'/'}>Restaurantes</Link>
            <img src={logo} alt="efood" />
            <ButtonCart onClick={goToCart}>
              <span>{itemsCart.length}</span> produto(s) no carrinho
            </ButtonCart>
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
            AddCart={() => {
              dispatch(adicionar(plate))
              setIsDishOpen(false)
              goToCart()

            }}
            onclose={()=> setIsDishOpen(false)
            }
          />
      }
      {cartOpen &&<Right onclick={() => setCartOpen(false)}><Cart onclick={goToAdress}/></Right>}
      <form action="Post"  onSubmit={form.handleSubmit}>
        {adress && <Right onclick={() => setAdress(false)}>
          <ContainerDelivery>
            <Title>Entrega</Title>
            <ContainerInput>
              <Label>Quem irá receber</Label>
              <Input  type="text" name="quem_ira_receber" value={form.values.quem_ira_receber} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </ContainerInput>
            <ContainerInput>
              <Label>Endereço</Label>
              <Input  type="text" name="endereco" value={form.values.endereco} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </ContainerInput>
            <ContainerInput>
              <Label>Cidade</Label>
              <Input  type="text" name="cidade" value={form.values.cidade} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </ContainerInput>
            <CepNumber>
            <ContainerInput>
              <Label>Cep</Label>
              <InputMask
                name="cep"
                id="zipCode"
                type="text"
                value={form.values.cep}
                onChange={(event) => handleChange(event, 'cep')}
                onBlur={form.handleBlur}
                className={checkInputHasError("zipCode") ? "has-error" : ""}
                mask="99999-999"
                maskChar={null}
              />
            </ContainerInput>
            <ContainerInput>
              <Label>Numero</Label>
              <Input  type="number" name="numero" value={form.values.numero} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </ContainerInput>
            </CepNumber>
            <Last>
              <Button type="button" onclick={goToPay}>Continuar com o pagamento</Button>

              <Button type="button" onclick={goToCart}>Voltar para o carrinho</Button>
            </Last>
          </ContainerDelivery>
        </Right>}
        {pay && <Right onclick={() => setPay(false)}>
          <ContainerPay>
            <Title>Pagamento - Valor a pagar R$ <span>190,90</span></Title>
            <ContainerInput>
              <Label>Nome no cartão</Label>
              <Input  type="text" name="nome_no_cartao" value={form.values.nome_no_cartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </ContainerInput>
            <NumberAndCvv>
              <ContainerInput>
                <Label htmlFor="numero_do_cartao">Número do cartão</Label>
                <InputMask
                  name="numero_do_cartao"
                  id="numero_do_cartao"
                  type="text"
                  value={form.values.numero_do_cartao}
                  onChange={(event) => handleChange(event, 'numero_do_cartao')}
                  onBlur={() => form.handleBlur}
                  mask="9999-9999-9999-9999"
                  maskChar={null}
                />
              </ContainerInput>
              <ContainerInput>
                <Label htmlFor='cvv'>CVV</Label>
                <InputMask
                  name="cvv"
                  id="nucvvmero_do_cartao"
                  type="text"
                  value={form.values.cvv}
                  onChange={(event) => handleChange(event, 'cvv')}
                  onBlur={() => form.handleBlur}
                  mask="999"
                  maskChar={null}
                />
              </ContainerInput>
            </NumberAndCvv>
            <CepNumber>
              <ContainerInput>
                <Label htmlFor='mes'>Mês de vencimento</Label>
                <InputMask
                  name="mes"
                  id="mes"
                  type="text"
                  value={form.values.mes_vencimento}
                  onChange={(event) => handleChange(event, 'mes_vencimento')}
                  onBlur={() => form.handleBlur}
                  mask="99"
                  maskChar={null}
                />
              </ContainerInput>
              <ContainerInput>
                <Label htmlFor='ano'>Ano de vencimento</Label>
                <InputMask
                  name="ano"
                  id="ano"
                  type="text"
                  value={form.values.ano_vencimento}
                  onChange={(event) => handleChange(event, 'ano_vencimento')}
                  onBlur={() => form.handleBlur}
                  mask="99"
                  maskChar={null}
                />
              </ContainerInput>
            </CepNumber>
            <Last>
              <Button onclick={goToOrderFinished} type="submit">Finalizar pagamento</Button>
              <Button type="button" onclick={goToAdress}>Voltar para a edição de endereço</Button>
            </Last>

          </ContainerPay>
        </Right> }
        {isFinished && <Right onclick={() => setIsFinished(false)}><Order backToHome={() =>navigate('/')}/></Right> }
      </form>
      <Footer />
    </Container>
  )
}
