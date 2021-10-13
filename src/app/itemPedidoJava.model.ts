import { Pedido } from "./pedido.model"
import { Produto } from "./produto.model"

export class ItemPedidoJava {
    public id_item: number
    public produto: Produto
    public qtde: number
    public valorItem: number
    public pedido: Pedido  

    constructor(id_item: number, produto: Produto, qtde: number, valorItem: number, pedido: Pedido) {
        this.id_item = id_item
        this.produto = produto
        this.qtde = qtde
        this.valorItem = valorItem
        this.pedido = pedido
    }
}

