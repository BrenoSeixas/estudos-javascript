for (var n = 0; n < 10; n++) {
  console.log("Testando");
}

var i = 0;
while (i < 10) {
  console.log("teste");
  i++;
}

var videoGames = ["switch", "ps4", "xbox", "3ds"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "ps4") {
    break;
  }
}

videoGames.forEach(function (item) {
  console.log(item);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilGanhou = [1959, 1962, 1970, 1994, 2002];

for(var i = 0; i < brasilGanhou.length; i++){
  console.log(`O Brasil ganhou a copa no ano de ${brasilGanhou[i]}`);
}

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for(var i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if(frutas[i] === "Pera"){
    break;
  }
}
var fruta = frutas[frutas.length -1]
    console.log(fruta);
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
