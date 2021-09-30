import { HttpClient } from "@angular/common/http";
import { ItemPedido } from "./itemPedido.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Pedido } from "./pedido.model";

@Injectable({
    providedIn: 'root'
  })
export class PedidoService {

    public realizarPedido(codigoCli: number, itens: ItemPedido[]): Observable<any> {
        return this.http.post<any>(`http://localhost:8080/pedidos/novoPedido?idCliente=${codigoCli}`, itens)
    }

    constructor(private http: HttpClient) {

    }
}