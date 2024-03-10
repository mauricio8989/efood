export class Plate{
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string

  constructor(id: number, foto: string, nome: string, descricao: string, preco: number, porcao: string) {
    this.id = id;
    this.foto = foto;
    this.nome = nome;
    this.descricao = descricao;
    this.porcao = porcao;
    this.preco = preco;
  }
}
