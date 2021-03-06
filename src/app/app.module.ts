import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodaPeComponent } from './roda-pe/roda-pe.component';
import { MenuComponent } from './menu/menu.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { AlteraProdutoComponent } from './altera-produto/altera-produto.component';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { VerPedidosComponent } from './ver-pedidos/ver-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodaPeComponent,
    MenuComponent,
    CadastrarProdutosComponent,
    ListaProdutosComponent,
    AlteraProdutoComponent,
    CadastrarClientesComponent,
    ListaClientesComponent,
    RealizarPedidoComponent,
    VerPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
