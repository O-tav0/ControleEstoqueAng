import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPedido } from '../itemPedido.model';
import { PedidoService } from '../pedido.service';
import { Observable } from 'rxjs';
import { Pedido } from '../pedido.model';
import { ItemPedidoJava } from '../itemPedidoJava.model';

@Component({
  selector: 'app-ver-pedidos',
  templateUrl: './ver-pedidos.component.html',
  styleUrls: ['./ver-pedidos.component.css']
})
export class VerPedidosComponent implements OnInit {

  public idCli: number
  public pedidosDoCliente: Observable<Pedido[]>
  public itensDoPedido: Observable<ItemPedidoJava[]>

  public buscarItensDoPedido(codigo: number) {
    this.itensDoPedido = this.pedidoService.itensDoPedido(codigo)

    let displayAtualItens = document.getElementById(`${codigo}`);
    if (displayAtualItens!.style.display === "block") {
      displayAtualItens!.style.display = "none";

    } else {
      displayAtualItens!.style.display = "block";
    }
  }

  constructor(private rota: ActivatedRoute, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.rota.params.subscribe((parametro: any) => {
      this.idCli = parametro.id_cliente
      this.pedidosDoCliente = this.pedidoService.pedidosPorCliente(this.idCli)
    })
  }
}
