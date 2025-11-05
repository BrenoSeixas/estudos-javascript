// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var teste1 = -"12s";
console.log(teste1);

var teste2 = +"55d";
console.log(teste2);

// Somar a string '200' com o número 50 e retornar 250
var n1 = +"200";
n2 = 50;

console.log(n1 + n2);

// Incremente o número 5 e retorne o seu valor incrementado
var n3 = 5;
console.log(++n3);

// Como dividir o peso por 2?
var numero = +"80" / 2; //Pra isso dividir ele direto por aqui
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(peso);
