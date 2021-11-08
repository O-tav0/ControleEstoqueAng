export class Produto {
  public id_produto: number;
  public nome: string;
  public valor: number;
  public qtde: number;
  public descricao: string;
  public imgProd: string;

  constructor(nome: string, valor: number, qtde: number, descricao: string) {
    this.nome = nome;
    this.valor = valor;
    this.qtde = qtde;
    this.descricao = descricao;
  }

  public getIdProduto(): number {
    return this.id_produto;
  }

  public getNome(): string {
    return this.nome;
  }

  public getValor(): number {
    return this.valor;
  }
}
