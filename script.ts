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

const textao = " Aqui vai um textaoo    "

function normalizarTexto(texto: string) {
    return texto.trim().toLocaleLowerCase()
}

console.log(normalizarTexto(textao))
