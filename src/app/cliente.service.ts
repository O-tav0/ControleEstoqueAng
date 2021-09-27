import { Cliente } from "./cliente.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators"; 

@Injectable({
    providedIn: 'root'
  })
export class ClienteService {

    public novoCliente(cli: Cliente): Observable<Cliente> {
        return this.http.post<any>('http://localhost:8080/clientesControle/novo', cli)
    }

    public recuperaClientes(): Observable<Cliente[]> {
        return this.http.get('http://localhost:8080/clientesControle/listarClientes').pipe(map((resposta: any) => resposta))
    }

    public deletarCliente(id: number):Observable<Cliente> {
        return this.http.delete<Cliente>(`http://localhost:8080/clientesControle/deletar?codigo=${id}`)
    }

    constructor(private http: HttpClient) {
    }
}