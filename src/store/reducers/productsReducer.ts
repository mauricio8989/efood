import { createSlice } from "@reduxjs/toolkit";
import { Plate } from "../../models/plate";

type ProductState = {
  items: Plate[]
}

const initialState: ProductState = {
  items: [
    {
      id: 1,
      image: 'https://beniniedonato.com.br/wp-content/uploads/2022/04/bife-florentino.jpg',
      title: 'Bife à Fiorentina',
      description: `
        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          `,
      value: 69.89
    },
    {
      id: 2,
      image: 'https://ogimg.infoglobo.com.br/in/22111928-630-f16/FT1086A/760/FiammettaSpaghetti-Negro-Tinta-de-LulaCredito-Rodrig-Azevedo-3.jpeg.jpg',
      title: 'Espaguete com tinta de lula',
      description: `
        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          `,
      value: 38.89
    },
    {
      id: 3,
      image: 'https://img.freepik.com/fotos-premium/risoto-com-tinta-de-lula-e-lula-amassada_136960-196.jpg',
      title: 'Risoto com tinta de lula',
      description: `
        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          `,
      value: 59.99
    },
    {
      id: 4,
      image: 'https://www.recetin.com/wp-content/uploads/2021/10/mas-modi-8-min.jpg',
      title: 'Sépia com ervilhas',
      description: `
        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          `,
      value: 28.89
    },
    {
      id: 5,
      image: 'https://revistamenu.com.br/wp-content/uploads/sites/24/2020/03/kiaora_lula-1.jpg',
      title: 'Lulas fritas',
      description: `
        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          `,
      value: 19.89
    },
    {
      id: 6,
      image: 'https://s2.glbimg.com/QlcUlR-Auf0vPooPkkqbvfBll9Y=/e.glbimg.com/og/ed/f/original/2018/04/04/receita-de-polvo-grelhado-com-pure-de-batata-rustico.jpg',
      title: 'Polvo grelhado',
      description: `
        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
          `,
      value: 79.89
    },
  ],
}

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {}
})

export default productReducer.reducer
