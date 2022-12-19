"use strict";
// const total: number = 20
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <p>R$ ${data.descricao}</p>
      <p>R$ ${data.garantia}</p>
      <p>R$ ${data.seguroAcidentes}</p>
      <h2>Empresa Fabricante: ${data.empresaFabricante.nome}</h2>
      <p>R$ ${data.empresaFabricante.fundacao}</p>
      <p>R$ ${data.empresaFabricante.pais}</p>
      <h2>Empresa Montadora: ${data.empresaMontadora.nome}</h2>
      <p>R$ ${data.empresaMontadora.fundacao}</p>
      <p>R$ ${data.empresaMontadora.pais}</p>
    </div>
  `;
}
