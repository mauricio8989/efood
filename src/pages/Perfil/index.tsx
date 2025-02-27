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
import InputMask from "react-input-mask";
import FormatPrice from "../../utils/FormatPrice";
import * as Yup from "yup"


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
  const [responseApi, setResponseApi] = useState('')

  function handleClick(item: Plate){
    setIsDishOpen(true)
    setPlate(item)
  }
  function goToCart(){
    setPay(false)
    setAdress(false)
    setCartOpen(true)
  }

  function goToPay() {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        form.setTouched({
          quem_ira_receber: true,
          endereco: true,
          cidade: true,
          cep: true,
          numero: true
        });
      }
      if(Object.keys(errors).length <= 5){
        setAdress(false)
        setCartOpen(false)
        setPay(true)
      }
    });
  }
  function goToAdress(){
    setAdress(true)
    setCartOpen(false)
    setPay(false)
  }

  const total: number = itemsCart.reduce((acumulator, currentValue) => {
    return (acumulator += currentValue.preco)
  },0);

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
        quem_ira_receber: Yup.string().required("Campo obrigatório"),
        endereco: Yup.string().required("Campo obrigatório"),
        cidade: Yup.string().required("Campo obrigatório"),
        cep: Yup.string().min(8,"O campo precisa ter 8 caractéres").max(9, "O campo precisa ter 8 caractéres").matches(/^\d{5}-\d{3}$/, "CEP inválido").required("Campo obrigatório"),
        numero: Yup.number().required("Campo obrigatório").positive("Número inválido"),
        complemento: Yup.string(),
        nome_no_cartao: Yup.string().required("Campo obrigatório"),
        numero_do_cartao: Yup.string().min(19, "O campo precisa ter 16 caractéres").max(19, "O campo precisa ter 16 caractéres").matches(/^[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}$/, "Número do cartão inválido").required("Campo obrigatório"),
        cvv: Yup.string().matches(/^\d{3}$/, "CVV inválido").required("Campo obrigatório"),
        mes_vencimento: Yup.string().min(2, "O campo precisa ter 2 caractéres").max(2, "O campo precisa ter 4 caractéres").matches(/^\d{2}$/, "Mês inválido").required("Campo obrigatório"),
        ano_vencimento: Yup.string().min(4, "O campo precisa ter 4 caractéres").max(4, "O campo precisa ter 4 caractéres").matches(/^\d{4}$/, "Ano inválido").required("Campo obrigatório"),
      }),
      onSubmit: function(){

      }
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

    const formatFormData = (formValues: typeof form.values, cartItems: Plate[]) => {
      return {
        products: cartItems.map(item => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: formValues.quem_ira_receber,
          address: {
            description: formValues.endereco,
            city: formValues.cidade,
            zipCode: formValues.cep,
            number: Number(formValues.numero),
            complement: formValues.complemento || ''
          }
        },
        payment: {
          card: {
            name: formValues.nome_no_cartao,
            number: formValues.numero_do_cartao,
            code: Number(formValues.cvv),
            expires: {
              month: Number(formValues.mes_vencimento),
              year: Number(formValues.ano_vencimento)
            }
          }
        }
      };
    };

  const goToOrderFinished = async () => {
    if (form.isValid) {
      try {
        const formattedData = formatFormData(form.values, itemsCart);
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formattedData)
        });
        if (response.status === 201) {
          const textoResposta = await response.text();
          const responseData = JSON.parse(textoResposta);
          setResponseApi(responseData.orderId);
        } else {
          alert(`Falha ao enviar o pedido. Status: ${response.status}`);
        }

        if (!response.ok) {
          throw new Error('Falha ao enviar o pedido');
        }

        setIsFinished(true);
        setPay(false);
      } catch (error) {
        console.error('Erro ao enviar o pedido:', error);
      }
    } else {
      form.validateForm();
    }
  };
  const sendOrder = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        form.setTouched({
          nome_no_cartao: true,
          numero_do_cartao: true,
          cvv: true,
          mes_vencimento: true,
          ano_vencimento: true
        });
      }
      if(Object.keys(errors).length === 0){
        goToOrderFinished()
      }
    });

  }

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
      <div className="container" id="container-plates">
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
      <form action="POST">
        {adress && <Right onclick={() => setAdress(false)}>
          <ContainerDelivery>
            <Title>Entrega</Title>
            <ContainerInput>
              <Label>Quem irá receber</Label>
              <Input  type="text" name="quem_ira_receber" value={form.values.quem_ira_receber} onChange={form.handleChange} onBlur={form.handleBlur}/>
              {form.touched.quem_ira_receber && form.errors.quem_ira_receber &&
                <span className="error-message">{form.errors.quem_ira_receber}</span>
              }
            </ContainerInput>
            <ContainerInput>
              <Label>Endereço</Label>
              <Input  type="text" name="endereco" value={form.values.endereco} onChange={form.handleChange} onBlur={form.handleBlur}/>
              {form.touched.quem_ira_receber && form.errors.quem_ira_receber &&
                <span className="error-message">{form.errors.endereco}</span>
              }
            </ContainerInput>
            <ContainerInput>
              <Label>Cidade</Label>
              <Input  type="text" name="cidade" value={form.values.cidade} onChange={form.handleChange} onBlur={form.handleBlur}/>
              {form.touched.quem_ira_receber && form.errors.quem_ira_receber &&
                <span className="error-message">{form.errors.cidade}</span>
              }
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
              {form.touched.cep && form.errors.cep &&
                <span className="error-message">{form.errors.cep}</span>
              }
            </ContainerInput>
            <ContainerInput>
              <Label>Numero</Label>
              <Input  type="text" name="numero" value={form.values.numero} onChange={form.handleChange} onBlur={form.handleBlur}/>
              {form.touched.numero && form.errors.numero &&
                <span className="error-message">{form.errors.numero}</span>
              }
            </ContainerInput>
            </CepNumber>
            <ContainerInput>
              <Label>Complemento</Label>
              <Input  type="text" name="complemento" value={form.values.complemento} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </ContainerInput>
            <Last>
              <Button type="button" onclick={goToPay}>Continuar com o pagamento</Button>
              <Button type="button" onclick={goToCart}>Voltar para o carrinho</Button>
            </Last>
          </ContainerDelivery>
        </Right>}
        {pay && <Right onclick={() => setPay(false)}>
          <ContainerPay>
            <Title>Pagamento - Valor a pagar R$ <span>{FormatPrice(total)}</span></Title>
            <ContainerInput>
              <Label>Nome no cartão</Label>
              <Input  type="text" name="nome_no_cartao" value={form.values.nome_no_cartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
              {form.touched.nome_no_cartao && form.errors.nome_no_cartao &&
                <span className="error-message">{form.errors.nome_no_cartao}</span>
              }
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
                {form.touched.numero_do_cartao && form.errors.numero_do_cartao &&
                  <span className="error-message">{form.errors.numero_do_cartao}</span>
                }
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
                {form.touched.cvv && form.errors.cvv &&
                  <span className="error-message">{form.errors.cvv}</span>
                }
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
                {form.touched.mes_vencimento && form.errors.mes_vencimento &&
                  <span className="error-message">{form.errors.mes_vencimento}</span>
                }
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
                  mask="9999"
                  maskChar={null}
                />
                {form.touched.ano_vencimento && form.errors.ano_vencimento &&
                  <span className="error-message">{form.errors.ano_vencimento}</span>
                }
              </ContainerInput>
            </CepNumber>
            <Last>
              <Button type="button" onclick={sendOrder}>Finalizar pagamento</Button>
              <Button type="button" onclick={goToAdress}>Voltar para a edição de endereço</Button>
            </Last>

          </ContainerPay>
        </Right> }
        {isFinished && <Right onclick={() => setIsFinished(false)}><Order orderId={String(responseApi)} backToHome={() =>navigate('/')}/></Right> }
      </form>
      <Footer />
    </Container>
  )
}
