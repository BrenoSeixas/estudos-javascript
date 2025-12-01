// function espera(texto) {
//   console.log(texto);
// }
// setTimeout(espera, 1000, "Depois de 1s");

// const btn = document.querySelector("button");
// addEventListener("click", habdleClick);

// function habdleClick() {
//   setTimeout(() => {
//     console.log(this);
//     btn.classList.add("active");
//   }, 3000);
// }

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, 'Passou 1s');

// // loop a cada segundo
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const body = document.body;

// function mudarClasse(){
//   body.classList.toggle('azul')
// }

// setInterval(mudarClasse,2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
    iniciar.removeAttribute("disabled");
}

function resetarTempo() {
  i = 0;
  tempo.innerText = 0;
}
