// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');
function adicionarClasse(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}
linksInternos.forEach((link) => {
  link.addEventListener("click", adicionarClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const elementos = document.querySelector("body * ");
// function clicou(event) {
//   //console.log(event.target);
//   event.target.remove();
// }
// window.addEventListener("click", clicou);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function aumentarTexto(event) {
  if (event.key === "t") {
    console.log("clicou");
  }
}

window.addEventListener("keydown", aumentarTexto);
