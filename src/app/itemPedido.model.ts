import { Produto } from "./produto.model"

export class ItemPedido {
    public id: number
    public qtdeItem: number

    constructor(id: number, qtdeItem: number) {
        this.id = id
        this.qtdeItem = qtdeItem
    }
}