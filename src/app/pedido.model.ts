import { Cliente } from "./cliente.model";
import { ItemPedido } from "./itemPedido.model";

export class Pedido {
    public id_pedido: number
    public cliente: Cliente
    public valorTotal: number
    public listaItens: ItemPedido[]

    constructor(cliente: Cliente, listaDeItens: ItemPedido[]) {
        this.cliente = cliente
        this.listaItens = listaDeItens
    }
}