// //const h1  =  document.querySelector('h1');
// const animaisLista = document.querySelector(".animais-lista");

// //h1.innerHTML = '<p>Novo texto</p>'

// //console.log(h1.outerHTML)
// //console.log(h1.innerHTML)

// const lista = document.querySelector(".animais-lista");

// //console.log(lista.childNodes)

// const contato = document.querySelector(".contato");
// const tituloConatato = contato.querySelector(".titulo");
// const imagem = document.querySelector("img");
// const mapa = document.querySelector(".mapa");

// //contato.insertBefore(imagem,tituloConatato)

// // const novoH1 = document.createElement("h1");
// // novoH1.innerText = "texto";
// // novoH1.classList.add("titulo");

// // animaisLista.appendChild(novoH1);

// const h1  = document.querySelector('h1');
// const faq = document.querySelector('.faq');
// const animaisLista = document.querySelector('.animais-lista')

// const cloneH1 = h1.cloneNode(true)
// animaisLista.appendChild(cloneH1)

// console.log(cloneH1)
// console.log(h1)

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);
menu.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq"); 
const primeiroDt = faq.querySelector("dt");
const proximoDD = primeiroDt.nextSibling;

// Selecione o DD referente ao primeiro DT
const dt1 = document.querySelector("dt");
const dd = dt1.querySelector("dd");

// Substitua o conteúdo html de .faq pelo de .animais
const faq1 = document.querySelector(".faq");
const animais = document.querySelector(".animais");
//faq1.classList.add('.animais-descricao')
faq1.innerHTML = animais.innerHTML;
faq1.outerHTML = animais.outerHTML;
