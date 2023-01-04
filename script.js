"use strict";
// const total: number = 20
// function somar(a: number, b: number){
//     return a + b
// }
// console.log(somar(5,15))
// const carro = {
//     marca: 'Honda',
//     ano: 2014
// }
// carro.marca = "Audi"
// const nintendo = {
//     nome: "Nintendo",
//     preco: "2000"
// }
// const trasnformPrice = (produto: {nome: string; preco: string}) => {
//     produto.preco = 'R$ ' + produto.preco
//     return produto
// }
// const newProduct = trasnformPrice(nintendo)
// const textao = " Aqui vai um textaoo    "
// function normalizarTexto(texto: string) {
//     return texto.trim().toLocaleLowerCase()
// }
// console.log(normalizarTexto(textao))
// const input = document.querySelector('input');
// const total = localStorage.getItem('total');
// if (input && total) {
//     input.value = total
//     calcularGanho(Number(input.value))
// }
// function calcularGanho(value: number) {
//     const p = document.querySelector('p');
//     if (p) p.innerText = `ganho total: ${value + 100 - (value) * 0.2}`;
// }
// function totalMudou() {
//     if (input) {
//         const value = input.value;
//         localStorage.setItem('total', value);
//         calcularGanho(Number(value))
//     }
// }
// if (input) input.addEventListener('keyup', totalMudou);
// let total: number | string = 200
// console.log(total)
// const button = document.querySelector('button')
// button?.click()
// const toNumber = (value : number | string) => {
//     if(typeof value === "string"){
//         return Number(value)
//     } else if (typeof value === "number"){
//         return value
//     } else{
//         throw "value deve ser um número ou uma string"
//     }
// }
// type StringOrNUmber = string | number
// const valor: StringOrNUmber = '200'
// type Produto = {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }
// interface InterfaceProduto {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }
// function preencherDados(dados: InterfaceProduto) {
//     document.body.innerHTML += `
//     <div>
//       <h2>${dados.nome}</h2>
//       <p>R$ ${dados.preco}</p>
//       <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
//     </div>
//     `;
// }
// preencherDados({ nome: "Tablet", preco: 2000, teclado: true })
// preencherDados({ nome: "PC", preco: 8000, teclado: true })
// type Categorias = 'design' | 'codigo' | 'descod';
// function pintarCategoria(categoria: Categorias) {
//   if (categoria === 'design') {
//     console.log('Pintar vermelho');
//   } else if (categoria === 'codigo') {
//     console.log('Pintar verde');
//   } else if (categoria === 'descod') {
//     console.log('Pintar roxo');
//   }
// }
// pintarCategoria('codigo');
// interface Empresa {
//   nome: string;
//   fundacao: number;
//   pais: string;
// }
// interface API {
//   nome: string;
//   preco: number;
//   descricao: string;
//   garantia: string;
//   seguroAcidentes: boolean;
//   empresaFabricante: Empresa;
//   empresaMontadora: Empresa;
// }
// async function fetchProduct() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const data = await response.json();
//   showProduct(data);
// }fetchProduct();
// function showProduct(data: API) {
//   document.body.innerHTML += `
//     <div>
//       <h2>${data.nome}</h2>
//       <p>R$ ${data.preco}</p>
//       <p>R$ ${data.descricao}</p>
//       <p>R$ ${data.garantia}</p>
//       <p>R$ ${data.seguroAcidentes}</p>
//       <h2>Empresa Fabricante: ${data.empresaFabricante.nome}</h2>
//       <p>R$ ${data.empresaFabricante.fundacao}</p>
//       <p>R$ ${data.empresaFabricante.pais}</p>
//       <h2>Empresa Montadora: ${data.empresaMontadora.nome}</h2>
//       <p>R$ ${data.empresaMontadora.fundacao}</p>
//       <p>R$ ${data.empresaMontadora.pais}</p>
//     </div>
//   `;
// }
// type StrNumber = string | number
// interface Empresa {
//   nome: string;
//   fundacao: number;
//   pais: string;
// }
// interface Produto {
//   nome: string;
//   preco: number;
//   descricao: string;
//   garantia: StrNumber;
//   seguroAcidentes: true;
//   empresaFabricante: Empresa;
//   empresaMontadora: Empresa;
// }
// async function fetchProduct() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const data: Produto = await response.json();
//   showProduct(data);
// }
// fetchProduct();
// function showProduct(data: Produto) {
//   document.body.innerHTML = `
//     <div>
//       <h2>${data.nome}</h2>
//       <p>R$ ${data.preco}</p>
//       <div>
//         <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
//       </div>
//       <div>
//         <h3>Montadora: ${data.empresaMontadora.nome}</h3>
//       </div>
//     </div>
//   `;
// }
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro('J.R.R.Tolkien');
    }
    if (busca === "Dark Souls") {
        return new Jogo(1);
    }
    return null;
}
const produto = buscarProduto("O Hobbit");
if (produto instanceof Livro) {
    console.log(produto?.autor);
}
