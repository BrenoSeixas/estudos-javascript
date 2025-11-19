// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul


// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// console.log(li);
// console.log(arrayLi);

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// }

// const novaArray = Array.from(obj);
// console.log(novaArray)

// const teste = new Array(5,3,45,)
// console.log(teste)

// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Honda', 'Kia'); // 5
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carros.push('Ferrari'); // 6
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];



// const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
// const primeiroCarro = carros2.shift(); // 'Ford'
// carros2; // ['Fiat', 'VW', 'Honda'];

// const ultimoCarro = carros2.pop(); // 'Honda'
// carros2; // ['Fiat', 'VW'];

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const pizza = comidas.shift() 
const macarrao = comidas.pop()

comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')

console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));
console.log(estudantes)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

 html = html.split('section')
 html = html.join('ul')
 //
 html = html.split('div')
 html = html.join('li')
console.log(html)

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda',''];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopia = carros3.slice();
carros3.pop();
console.log(carros3);
console.log(carrosCopia);