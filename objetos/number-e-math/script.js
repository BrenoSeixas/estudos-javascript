const ano = 2018;
const dia = new Number(22);

console.log(Number.isNaN(5));
console.log(Number.isInteger(22));

console.log(Number.parseInt("99.50"));
console.log(Number.parseFloat("99.50"));

const preco = 2.99;
console.log(preco.toFixed()); //coloca a casa decimal no parentese

console.log(preco.toString());

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(valor);

const aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio);

// Número random entre 72 e 32
// Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;

// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(', ');
console.log(arrayNumeros)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) =>{
  soma += limparPreco(preco);
})