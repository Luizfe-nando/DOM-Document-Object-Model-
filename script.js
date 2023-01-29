
// Selecionar todos elementos da classe 'produto_preco'
let itemPreco = document.getElementsByClassName('produto_preco');

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
let total = 0;
  for (let item = 0; item < itemPreco.length; item++) {
    total += parseFloat(itemPreco[item].innerText);
  }
// Escrever no conteúdo da página o valor da soma
document.querySelector("body").innerHTML += "<p>  Valor total: " + total + "</p>";

