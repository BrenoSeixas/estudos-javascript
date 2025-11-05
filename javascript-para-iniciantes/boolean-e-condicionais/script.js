var nome = undefined;

if (nome) {
  console.log("existe");
} else {
  console.log("Não existe");
}

var condicional = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional);

var corFavorita = "Vermelho";
switch (corFavorita) {
  case "Azul":
    console.log("teste1");
    break;

  case "Verde":
    console.log("teste2");
    break;

  default:
    console.log("teste3");
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade1 = 20;
idade2 = 33;

if(idade1 < idade2){
  console.log("Ele é mais velho do que vc");
}
else if( idade1 === idade2){
    console.log("Vcs tem a mesma idade");
  }
else{
  console.log("Vc é mais velho que ele");
}


// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

if(dinheiroNaConta){
  console.log("Tem");
}else{
  console.log("Não tem");
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(china < brasil){
  console.log("Brasil é maior");
}
else if( china == brasil){
    console.log("Tem a mesma polução");
  }
else{
  console.log("China é maior");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
   console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
   console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
