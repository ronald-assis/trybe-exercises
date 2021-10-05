/*  
    Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada. 
    Modifique a estrutura da função para que ela seja uma arrow function .
    Modifique as concatenações para template literals .
    Copie o código abaixo.

*/
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`

  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`

  }
}
// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

testingScope(true);


// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b)
  return sortOddsAndEvens
}

const sortedArray = crescente(oddsAndEvens);
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);


/*
    Crie uma função que receba um número e retorne seu fatorial.

    Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

*/
const factorial = (number) => {
  let result = 1
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result
}

// console.log(factorial(4))

// Crie uma função que receba uma frase e retorne qual a maior palavra. 

const longestWord = (text) => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (let word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length
      result = word
    }
  }
  return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

/*
    Um botão ao qual será associado um event listener ;
    Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
    Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

    Crie um código JavaScript com a seguinte especificação:

*/

let clickCount = 0;
let textToDisplay = document.querySelector("#text");

const button = document.querySelector("#button_test")
button.addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1)

/*
  Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
  Exemplo:

  String determinada: "Tryber x aqui!"
  Parâmetro: "Bebeto"
  Retorno: "Tryber Bebeto aqui!"

*/

const array = ['HTML', 'CSS', 'JS', 'React', 'Node.js']

function buildSkillsPhrase(paramOne) {
  const arrayString = (x) => `Tryber ${x} aqui! 
  
  Tudo Bem?`
  
  let result = `${arrayString(paramOne)}
  
  Minhas cinco principais habilidades são:`

  array.forEach((skill, index) => result = `${result}
  
  - ${skill}`)

  result = `
  ${result}
  
  #goTrybe
  `
  return result
}


console.log(buildSkillsPhrase('ronald'))