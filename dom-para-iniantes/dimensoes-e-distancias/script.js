// const listaAnimais = document.querySelector('.animais-lista')

// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(height);
// console.log(animaisTop);

// const primeiroh2 = document.querySelector('h2');
// primeiroh2.offsetLeft;

// const rect = primeiroh2.getBoundingClientRect();
// console.log(rect.left);

// const h2rect = primeiroh2.getBoundingClientRect();

// if(h2rect.top < 0){
//   console.log("Passou do elemento");
// }

// console.log(
// window.innerWidth,
// window.outerWidth,
// window.innerHeight,
// window.outerHeight,
// window.pageYOffset
// );

// const small = window.matchMedia('(max-width: 600px)');

// console.log("Exercicío")

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector("img");
const rectPrimeiraImagem = primeiraImagem.offsetTop;
console.log(rectPrimeiraImagem);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const todasAsImagens = document.querySelectorAll("img");
  let soma = 0;
  todasAsImagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const todosOsLinks = document.querySelectorAll("a");
todosOsLinks.forEach((link) => {
  const linkWidht = link.offsetWidth
  const linkHeight = link.offsetHeight
  if (linkWidht >= 48 && linkHeight >= 48) {
    console.log("Acessivel");
  } else {
    console.log("Não acessivel");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia("(max-width: 720)");
if (browser < window.innerWidth === 720) {
  console.log("Maior");
} else {
  console.log("Menor");
}
