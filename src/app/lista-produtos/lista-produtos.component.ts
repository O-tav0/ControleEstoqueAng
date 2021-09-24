import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  listaDeProdutos: Observable<Produto[]>
  prodPesquisado: Produto
  codigoProdutoSelecionado: number

  formAlteracao: FormGroup = new FormGroup({
    NovonomeProd: new FormControl(),
    NovovalorProd: new FormControl(),
    Novaqtde: new FormControl(),
    NovaDescricao: new FormControl()
  })

  public carregarFormulario(codigo: number): void {
    this.codigoProdutoSelecionado = codigo
    this.produtoService.getProdutosPorId(this.codigoProdutoSelecionado).then((produtoRecuperado: Produto) => {
      this.prodPesquisado = produtoRecuperado
      this.formAlteracao.setValue({NovonomeProd: this.prodPesquisado.nome, 
                                    NovovalorProd: this.prodPesquisado.valor, 
                                    Novaqtde: this.prodPesquisado.qtde, 
                                    NovaDescricao: this.prodPesquisado.descricao})
    })
  }
  public alterarProduto() {
    this.produtoService.alterarProduto(this.codigoProdutoSelecionado, 
                                        this.formAlteracao.value.NovonomeProd, 
                                        this.formAlteracao.value.NovovalorProd, 
                                        this.formAlteracao.value.Novaqtde,
                                        this.formAlteracao.value.NovaDescricao).subscribe(() => {
                                          alert('Produto alterado com sucesso')
                                          this.ngOnInit()
                                          $('#exampleModal').modal('hide')
                                        })
  }

  public deletarProduto(codigo: number) {
    this.produtoService.deletarProduto(codigo).subscribe(() => {
      alert('Produto Deletado com sucesso')
      this.ngOnInit()
    })
  }

  constructor(private produtoService: ProdutoService, private roteador: Router) { }

  ngOnInit(): void {
    this.listaDeProdutos = this.produtoService.getProdutos()
  }

}
