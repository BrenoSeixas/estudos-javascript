//const menu = document.querySelector(".menu");
//menu.classList.add("tentativa");
//menu.classList.remove("tentativa");

// if (menu.classList.contains("tentativa")) {
//   //menu.classList.toggle("tentativa");
//   console.log("tem sim");
// } else {
//   //menu.classList.add("texto");
//   console.log("tem não")
// }

//console.log(menu.classList);

const animais = document.querySelector('.animais');

const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');
img.setAttribute('texto','teste');

// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a ');
menu.forEach((item) => {
item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
item.classList.remove('ativo')
});

menu[0].classList.add('ativo')
//console.log(menu.classList)

// Verifique se as imagens possuem o atributo alt
const img1 = document.querySelectorAll('img')

img1.forEach((item) => {
const possuiAtributo = item.hasAttribute('atl')
console.log(possuiAtributo)
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://google.com');

console.log(link);