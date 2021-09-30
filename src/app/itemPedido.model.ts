import { Produto } from "./produto.model"

export class ItemPedido {
    public id: number
    public qtde: number

    constructor(id: number, qtde: number) {
        this.id = id
        this.qtde = qtde
    }
}