import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  public listaDosClientes: Observable<Cliente[]>



  public alterarCliente(codigo: number) {
    
  }

  public excluirCliente(codigo: number) {
    this.clienteService.deletarCliente(codigo).subscribe(() => {
      alert('Cliente deletado com sucesso')
      this.ngOnInit()
    })
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listaDosClientes = this.clienteService.recuperaClientes()
  }

}
