var pessoa = {
  nome: "Breno",
  idade: 20,
  profisscao: "Dev",
};

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * 4;
  },
};

//console.log(quadrado.area(4));
//console.log(quadrado.perimetro(4));

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";

menu.color = "#0000ff";

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

var dadosPessoais = {
  nome: "Breno",
  sobrenome: "Seixas",
  idade: 20,
  profisscao: "estudante",

  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raça: "Labrador",
  cor: "preta",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Au Au";
    } else {
      return "Cri Cri";
    }
  },
};
