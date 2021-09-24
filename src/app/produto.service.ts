import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto.model';
import { map } from "rxjs/operators"; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    constructor(private http: HttpClient) {}

    public novoProduto(produto: Produto): Observable<Produto>{
      return this.http.post<Produto>('http://localhost:8080/produtosControle/novo', produto)
    }

    public getProdutos(): Observable<Produto[]> {
      return this.http.get("http://localhost:8080/produtosControle/listarProdutos").pipe(map((resposta: any) => resposta))
    }

    public getProdutosPorId(id: number): Promise<any> {
      return this.http.get(`http://localhost:8080/produtosControle/porID?codigo=${id}`).toPromise().then((resposta: any) => resposta)
    }

    public alterarProduto(codigo: number, novoNome: string, novoValor:number, novaQtde: number, novaDescricao: string) {
      return this.http.put<any>(`http://localhost:8080/produtosControle/alterarProduto?novoNome=${novoNome}&novoValor=${novoValor}&codigo=${codigo}&novaQtde=${novaQtde}&novaDescricao=${novaDescricao}`, codigo)
   }

   public deletarProduto(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`http://localhost:8080/produtosControle/deletar?codigo=${id}`)
  }

}