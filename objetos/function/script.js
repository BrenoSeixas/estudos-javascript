// function somar(n1, n2) {
//   return n1 + n2;
// }

// somar.length; // 2
// somar.name; // 'somar'

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const ul = new Dom("ul");
// console.log(ul.element);

// ul.ativo("ativo");

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerText = conteudo) : null;
  return elemento;
}
console.log(criarElementos("li", "ativo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1 = criarElementos.bind(null, "h1", "ativo");
console.log(h1("teste"));
