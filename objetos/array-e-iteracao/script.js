// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// const li = document.querySelectorAll("li");

// li.forEach((i) => i.classList.add("ativa"));

// li.forEach(function (item) {
//   item.classList.add("ativa");
// });

// const carros = ["Ford", "Fiat", "Honda"];

// carros.map((item,index,array) =>{
//   console.log(item, index, array);
// })

// const aulas = [10, 25, 30]

// const reduceAulas = aulas.reduce((acumulador, item, index, array) =>{
// console.log(acumulador,item,array)
// return acumulador + item
// },0)

// console.log(reduceAulas)

// const numeros = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior;
// });

// maiorValor; // 60

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);
const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    aulas : aulas,
    horas: horas
  }
});

console.log(objetoCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQueCem = numeros.filter((n) => n > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const teste = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
});

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
