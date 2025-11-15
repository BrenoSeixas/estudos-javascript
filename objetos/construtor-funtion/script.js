// const carro ={
//   marca: "teste",
//   preco: 25,
// }

// const onibus ={
//   marca: "teste2",
//   preco: 24,
// }

function Carro(marcaAtribuido,precoAtribuido,anoAtibuto){
  this.marca = marcaAtribuido;
  this.preco = precoAtribuido;
  this.ano = anoAtibuto;
}

function Carro2(marcaAtribuido,precoInicial){
  const taxa =  1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marcaAtribuido;
  this.preco = precoFinal;
}

const teste = new Carro2('fiat',5000);

// const honda = new Carro("Honda",2000,2022);
// const fiat =  new Carro("Fiat",3000,2026)

// function Card(nome,acao,imagem,serLido){
// this.nome = nome;
// this.acao = acao;
// this.imagem = imagem;
// this.serLido = serLido;
// }

// let lidos =  new Card()