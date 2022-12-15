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

type StringOrNUmber = string | number

const valor: StringOrNUmber = '200'

type Produto = {
    nome: string;
    preco: number;
    teclado: boolean;
}

interface InterfaceProduto {
    nome: string;
    preco: number;
    teclado: boolean;
}

function preencherDados(dados: InterfaceProduto) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    </div>
    `;
}

preencherDados({ nome: "Tablet", preco: 2000, teclado: true })
preencherDados({ nome: "PC", preco: 8000, teclado: true })

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
  if (categoria === 'design') {
    console.log('Pintar vermelho');
  } else if (categoria === 'codigo') {
    console.log('Pintar verde');
  } else if (categoria === 'descod') {
    console.log('Pintar roxo');
  }
}

pintarCategoria('codigo');