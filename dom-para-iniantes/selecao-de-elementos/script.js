// const animais = document.getElementById("animais");
// console.log(animais);

// const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection);

// const primeiraLi = document.querySelector("li");
// //console.log(primeiraLi);

// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos);

// const animaImg = document.querySelectorAll(".animais img");

// const gridSectionHTML = document.getElementsByClassName("grid-section");
// const gridSectionNode = document.querySelectorAll(".grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode)

// gridSectionNode.forEach(function(item, index){
// console.log(item);
// });


// Retorne no console todas as imagens do site
const imagens =  document.getElementsByTagName('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensIma = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensIma);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);


// Selecione o primeiro h2 dentro de .animais-descricao
const primeiraH2 = document.querySelector('.animais-descricao h2');
console.log(primeiraH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length-1]);
