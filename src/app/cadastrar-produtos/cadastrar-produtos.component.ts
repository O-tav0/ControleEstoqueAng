import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  public prod: Produto

  public formCadastroProd: FormGroup = new FormGroup({
      nomeProd: new FormControl(),
      valorProd: new FormControl(),
      qtde: new FormControl(null),
      descricao: new FormControl()
  })

  public cadastrarProduto(): void {

    this.prod = new Produto(this.formCadastroProd.value.nomeProd, this.formCadastroProd.value.valorProd, this.formCadastroProd.value.qtde, this.formCadastroProd.value.descricao)

    this.produtoService.novoProduto(this.prod).subscribe(() => {
      alert('Produto cadastrado com sucesso')
    })
  }
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

}
