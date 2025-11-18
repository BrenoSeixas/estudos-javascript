// console.log(typeof Array.from !== 'undefined')

// if(typeof Array.from !== 'undefined'){
//   console.log('Existe')
// }else{
//   console.log('Não existe')
// }

// Liste 5 objetos nativos
Function;
Object;
Number;
String;
Array;

// Liste 5 objetos do browser
Window;
history;
Document;
HTMLAllCollection;
NodeList;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.onwebkittransitionend !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
