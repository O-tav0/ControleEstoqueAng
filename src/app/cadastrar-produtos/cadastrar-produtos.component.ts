import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Validators } from '@angular/forms';
import { UploadArquivoService } from '../uploadArquivo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css'],
})
export class CadastrarProdutosComponent implements OnInit {
  public prod: Produto;
  public image: File | null = null;

  public formCadastroProd: FormGroup = new FormGroup({
    nomeProd: new FormControl(),
    valorProd: new FormControl(),
    qtde: new FormControl(null),
    descricao: new FormControl(),
    //image: new FormControl(),
  });

  public cadastrarProduto(): void {
    this.prod = new Produto(
      this.formCadastroProd.value.nomeProd,
      this.formCadastroProd.value.valorProd,
      this.formCadastroProd.value.qtde,
      this.formCadastroProd.value.descricao
    );

    this.produtoService
      .novoProduto(
        this.formCadastroProd.value.nomeProd,
        this.formCadastroProd.value.valorProd,
        this.formCadastroProd.value.qtde,
        this.formCadastroProd.value.descricao,
        this.image!
      )
      .subscribe(() => {
        alert('Produto cadastrado com sucesso');
      });

    //this.uploadFileToActivity();
  }

  handleFileInput(files: FileList) {
    this.image = files.item(0);
  }

  uploadFileToActivity() {
    this.uploadArquivo.postFile(this.image!).subscribe(
      (data) => {
        alert('Upload Concluído');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(
    private produtoService: ProdutoService,
    private uploadArquivo: UploadArquivoService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
}
