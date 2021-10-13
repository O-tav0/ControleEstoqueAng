import { HttpClient } from "@angular/common/http";
import { ItemPedido } from "./itemPedido.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Pedido } from "./pedido.model";
import { map } from "rxjs/operators"; 
import { ItemPedidoJava } from "./itemPedidoJava.model";
import { Produto } from "./produto.model";

@Injectable({
    providedIn: 'root'
  })
export class PedidoService {

    public realizarPedido(codigoCli: number, itens: Produto[]): Observable<any> {
        return this.http.post<any>(`http://localhost:8080/pedidos/novoPedido?idCliente=${codigoCli}`, itens)
    }

    public pedidosPorCliente(codigo: number): Observable<Pedido[]> {
        return this.http.get(`http://localhost:8080/pedidos/porCliente?codigo=${codigo}`).pipe(map((resposta: any) => resposta))
    }

    public todosOsPedidos(): Observable<Pedido[]> {
        return this.http.get("http://localhost:8080/pedidos/todosOsPedidos").pipe(map((resposta: any) => resposta))
    }

    public itensDoPedido(codigo: number): Observable<ItemPedidoJava[]> {
        return this.http.get(`http://localhost:8080/pedidos/itensDoPedido?codigo=${codigo}`).pipe(map((resposta: any) => resposta))
    }

    constructor(private http: HttpClient) {

    }
}