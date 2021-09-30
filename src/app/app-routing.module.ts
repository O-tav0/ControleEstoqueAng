import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { HomeComponent } from './home/home.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';

const routes: Routes = [{path:"cadastrarProdutos", component: CadastrarProdutosComponent},
                        {path:"", component: HomeComponent},
                        {path:"listarProdutos", component: ListaProdutosComponent},
                        {path:"listarProdutos/:id_produto", component: ListaProdutosComponent} ,
                        {path:"cadastrarCliente", component: CadastrarClientesComponent },
                        {path:"listarClientes", component: ListaClientesComponent},
                        {path:"fazerPedido", component: RealizarPedidoComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
