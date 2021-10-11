import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { ItemPedido } from '../itemPedido.model';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido.model';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css'],
})
export class RealizarPedidoComponent implements OnInit {
  public listaDosClientes: Observable<Cliente[]>;
  public listaDosProdutos: Observable<Produto[]>;
  public idProdItem: number;
  public itensDoPedido: ItemPedido[] = [];
  public produtosDosItens: Produto[] = [];
  public totalPedido = 0;
  public qtdeItem: number;

  formTeste = new FormGroup({
    idClientePedido: new FormControl(),
    ProdItem: new FormControl(),
    qtdItem: new FormControl(),
  });

  public realizarPedido() {
    this.pedidoService
      .realizarPedido(
        this.formTeste.value.idClientePedido,
        this.produtosDosItens
      )
      .subscribe(() => {
        alert('Pedido Realizado com sucesso');
        this.ngOnInit();
        this.formTeste.reset();
        this.produtosDosItens = [];
      });
  }

  public adicionarItemPedido() {
    //let novoItem: ItemPedido;
    //let totalPedido: number;
    //novoItem = new ItemPedido(this.formTeste.value.ProdItem, this.formTeste.value.qtdItem)
    //this.itensDoPedido.push(novoItem)

    this.produtoService
      .getProdutosPorId(this.formTeste.value.ProdItem)
      .then((produtoRecuperado: Produto) => {
          if(this.produtosDosItens.some(prod => prod.id_produto == produtoRecuperado.id_produto)) {
            if (confirm('Item já adicionado ao pedido. Deseja aumentar a quantidade ?')) {
              this.produtosDosItens.find(produto => produto.id_produto == produtoRecuperado.id_produto)!.qtde++
              this.totalPedido = this.totalPedido + this.produtosDosItens.find(produto => produto.id_produto == produtoRecuperado.id_produto)!.valor
            } else {
            }
          } else {
            produtoRecuperado.qtde = 1;
            this.totalPedido = this.totalPedido + produtoRecuperado.valor;
            this.produtosDosItens.push(produtoRecuperado);
            alert('Item adicionado ao pedido');
          }
      }); 
  }

  public aumentarQtdItem(index: number) {
    this.produtosDosItens[index].qtde++;
    this.totalPedido = this.totalPedido + this.produtosDosItens[index].valor;
    console.log(this.produtosDosItens[index]);
  }

  public diminuirQtdItem(index: number) {
    if (this.produtosDosItens[index].qtde == 1) {
      if (confirm('Deseja remover o item do pedido ?')) {
        this.totalPedido =
          this.totalPedido - this.produtosDosItens[index].valor;
        this.produtosDosItens.splice(index, 1);
      } else {
      }
    } else {
      this.totalPedido = this.totalPedido - this.produtosDosItens[index].valor;
      this.produtosDosItens[index].qtde--;
    }
  }

  constructor(
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.listaDosClientes = this.clienteService.recuperaClientes();
    this.listaDosProdutos = this.produtoService.getProdutos();
  }
}
