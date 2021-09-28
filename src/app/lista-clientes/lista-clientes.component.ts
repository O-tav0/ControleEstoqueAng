import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  public listaDosClientes: Observable<Cliente[]>
  public codigoClienteSelecionado: number
  public clientePesquisado: Cliente

  public formAtualizaCliente: FormGroup = new FormGroup({
    nomeCli: new FormControl(),
    emailCli: new FormControl(),
    telefoneCli: new FormControl(),
    cepCli: new FormControl(),
    cidade: new FormControl(),
    uf: new FormControl(),
    bairro: new FormControl(),
    rua: new FormControl(),
    numero: new FormControl(),
    complemento: new FormControl()
  })

  public atualizaFormulario() {
    this.formAtualizaCliente.setValue({
      cepCli: this.clientePesquisado.cep,
      cidade: this.clientePesquisado.cidade,
      uf: this.clientePesquisado.uf,
      bairro: this.clientePesquisado.bairro,
      rua: this.clientePesquisado.rua,
      numero: this.clientePesquisado.numero})
  }
  
  public alterarCliente() {
    this.clienteService.alterarCliente(
      this.codigoClienteSelecionado, 
      this.formAtualizaCliente.value.nomeCli, 
      this.formAtualizaCliente.value.emailCli, 
      this.formAtualizaCliente.value.telefoneCli, 
      this.formAtualizaCliente.value.cepCli,
      this.formAtualizaCliente.value.cidade,
      this.formAtualizaCliente.value.uf, 
      this.formAtualizaCliente.value.bairro,
      this.formAtualizaCliente.value.rua,
      this.formAtualizaCliente.value.numero,
      this.formAtualizaCliente.value.complemento)

      .subscribe(() => {
        alert('Produto alterado com sucesso')
        this.ngOnInit()
        $('#exampleModal').modal('hide')
      })
  }

  public excluirCliente(codigo: number) {
    this.clienteService.deletarCliente(codigo).subscribe(() => {
      alert('Cliente deletado com sucesso')
      this.ngOnInit()
    })
  }

  public carregarFormulario(codigo: number) {
    this.codigoClienteSelecionado = codigo
    this.clienteService.pesquisarClientePorId(this.codigoClienteSelecionado).then((clienteRecuperado: Cliente) => {
      this.clientePesquisado = clienteRecuperado
      this.formAtualizaCliente.setValue({nomeCli: this.clientePesquisado.nome, 
                                    emailCli: this.clientePesquisado.email, 
                                    telefoneCli: this.clientePesquisado.telefone,
                                    cepCli: this.clientePesquisado.cep,
                                    cidade: this.clientePesquisado.cidade,
                                    uf: this.clientePesquisado.uf,
                                    bairro: this.clientePesquisado.bairro,
                                    rua: this.clientePesquisado.rua,
                                    numero: this.clientePesquisado.numero,
                                    complemento: this.clientePesquisado.complemento  
                                  })
    })
  }

  public mostrarEndereco(codigo: number) {
    let displayAtualFinanceiro = document.getElementById(`${codigo}`);
    if (displayAtualFinanceiro!.style.display === "block") {
      displayAtualFinanceiro!.style.display = "none";
    } else {
      displayAtualFinanceiro!.style.display = "block";
    }
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listaDosClientes = this.clienteService.recuperaClientes()
  }

}
