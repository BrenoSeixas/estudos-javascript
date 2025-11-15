// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     const elementoSelecionado = this.element();
//     elementoSelecionado.classList.add("ativar");
//   },
// };

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function () {
//     const elementoSelecionado = this.element();
//     elementoSelecionado.classList.add("ativar");
//   };
// }

// const seletorLi = new Dom("li");
// const seletorUl = new Dom("ul");

// const ultimoLi = new Dom("li:last-child");

//Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);

  this.adicionar = function (classe) {
    seletor.array.forEach((element) => {
      element.classList.add(classe);
    });
  };

  this.remover = function (classe) {
    seletor.array.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
