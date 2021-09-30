import { Cliente } from "./cliente.model";
import { ItemPedido } from "./itemPedido.model";

export class Pedido {
    private id_pedido: number
    private cliente: Cliente
    private valorTotal: number
    private listaItens: ItemPedido[]

    constructor(cliente: Cliente, listaDeItens: ItemPedido[]) {
        this.cliente = cliente
        this.listaItens = listaDeItens
    }
}