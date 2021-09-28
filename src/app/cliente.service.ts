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

    public pesquisarClientePorId(id: number): Promise<any> {
        return this.http.get(`http://localhost:8080/clientesControle/porID?codigo=${id}`).toPromise().then((resposta: any) => resposta)
    }

    public alterarCliente(codigo: number, novoNome: string, novoEmail:string, novoTelefone: string, novoCep: string, novaCidade: string, novaUf: string, novoBairro: string, novaRua: string, novoNumero: number, novoComplemento: string) {
        return this.http.put<any>(`http://localhost:8080/clientesControle/alterarCliente?novoNome=${novoNome}&novoEmail=${novoEmail}&codigo=${codigo}&novoTelefone=${novoTelefone}&novoCep=${novoCep}&novaCidade=${novaCidade}&novaUF=${novaUf}&novoBairro=${novoBairro}&novaRua=${novaRua}&novoNumero=${novoNumero}&novoComplemento=${novoComplemento}`, codigo)
    }

    constructor(private http: HttpClient) {
    }
}