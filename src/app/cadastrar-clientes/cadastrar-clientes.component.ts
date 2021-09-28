import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';



@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  public formCadastroCliente: FormGroup = new FormGroup({
    nomeCli: new FormControl(),
    emailCli: new FormControl(),
    cpfCli: new FormControl(),
    telefoneCli: new FormControl(),
    dataNascimentoCli: new FormControl(),
    cepCli: new FormControl(),
    cidade: new FormControl(),
    uf: new FormControl(),
    bairro: new FormControl(),
    rua: new FormControl(),
    numero: new FormControl(),
    complemento: new FormControl()
  })

  public atualizaFormulario() {
    let valorCep = (<HTMLInputElement>document.getElementById("cep")).value
    let valorCidade = (<HTMLInputElement>document.getElementById("cidade")).value
    let valorUF = (<HTMLInputElement>document.getElementById("uf")).value
    let valorBairro = (<HTMLInputElement>document.getElementById("bairro")).value
    let valorRua = (<HTMLInputElement>document.getElementById("rua")).value
    this.formCadastroCliente.setValue({
      cepCli: valorCep,
      cidade: valorCidade,
      uf: valorUF,
      bairro: valorBairro,
      rua: valorRua,
     })
  }

  public cadastrarCliente(): void {
    let novoCliente = new Cliente(this.formCadastroCliente.value.nomeCli, 
      this.formCadastroCliente.value.emailCli, 
      this.formCadastroCliente.value.telefoneCli,
      this.formCadastroCliente.value.dataNascimentoCli, 
      this.formCadastroCliente.value.cpfCli, 
      this.formCadastroCliente.value.cepCli, 
      this.formCadastroCliente.value.cidade, 
      this.formCadastroCliente.value.uf, 
      this.formCadastroCliente.value.bairro, 
      this.formCadastroCliente.value.rua, 
      this.formCadastroCliente.value.numero, 
      this.formCadastroCliente.value.complemento)

    
      this.clienteService.novoCliente(novoCliente).subscribe(() => {
        alert('Cliente foi cadastrado com sucesso!')
      })

      this.ngOnInit()
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
