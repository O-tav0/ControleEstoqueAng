import { ChildActivationEnd } from "@angular/router"

export class Cliente {
    public id_cliente: number
    public nome: string
    public email: string
    public telefone: string
    public data_nascimento: string
    public cpf: string
    public cep: string
    public cidade: string
    public uf: string
    public bairro: string
    public rua: string
    public numero: number
    public complemento: string

    constructor(nome: string, email: string, telefone: string, data: string, cpf: string, cep: string, cidade: string, uf: string, bairro: string, rua: string, numero:number, complemento: string) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.data_nascimento = data
        this.cpf = cpf
        this.cep = cep
        this.cidade = cidade
        this.uf = uf
        this.bairro = bairro
        this.rua = rua
        this.numero = numero
        this.complemento = complemento
    }
}