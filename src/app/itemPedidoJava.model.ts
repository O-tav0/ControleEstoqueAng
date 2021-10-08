export class ItemPedidoJava {
    public id_item: number
    public produto: number
    public qtde: number
    public valorItem: number
    public pedido: number  

    constructor(id_item: number, produto: number, qtde: number, valorItem: number, pedido: number) {
        this.id_item = id_item
        this.produto = produto
        this.qtde = qtde
        this.valorItem = valorItem
        this.pedido = pedido
    }
}

