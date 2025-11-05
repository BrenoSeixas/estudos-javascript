//window.alert("teste");

const href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5500/dom/index.html") {
  console.log("É igual");
}

const h1selecionado = document.querySelector("h1");
const h1classes = h1selecionado.classList;

h1selecionado.addEventListener("click", function () {
  console.log("testando", (h1selecionado.innerText = "tentativa"));
});

h1selecionado.addEventListener("click", function () {
  h1selecionado.innerText = "Hj não";
});

// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

console.log(h1selecionado.classList)

// Retorne a linguagem do navegador
console.log(window.navigator.language)

// Retorne a largura da janela 
console.log(window.innerWidth)

