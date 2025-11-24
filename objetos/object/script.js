// const pessoa = new Object({
//   nome: "Breno",
// });

// console.log(pessoa);

// const carro = {
//   rodaa: 4,

//   init(valor) {
//     this.marca = valor;
//     return this;
//   },

//   acelerar() {
//     return this.marca + " Acelerar";
//   },

//   buzinar() {
//     return this.marca + " Buzinou";
//   },
// };

// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar())

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar())

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },
//   buzinar() {
//     return "buzinou";
//   },
// };

// const carro = {
//   marca: "marca",
//   rodas: 4,
// };

// const moto = {
//   marca: "marca",
//   rodas: 2,
// };

// Object.assign(carro,funcaoAutomovel)

const moto = {};

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + "Total Rodas";
    },
  },
});

// Crie uma função que verifique
// corretamente o tipo de dado

function verTipo(dado) {
  return Object.prototype.toString.call(dado);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  },
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

const teste = Object.getOwnPropertyNames(Array.prototype);
const teste1 = Object.getOwnPropertyNames(String.prototype);
console.log(teste);
console.log(teste1);
