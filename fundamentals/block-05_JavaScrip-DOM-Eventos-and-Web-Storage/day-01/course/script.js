/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

text()
backgroundCenter()
correction()
backgroundMain()

function text (){
  let future = document.querySelector('#future').innerHTML = 'I see myself as a pleno developer'
}

function backgroundMain(){
  let mainContent = document.querySelector('.main-content').style.backgroundColor = 'rgb(76,164,109)'
}

function backgroundCenter(){
  let centerContent = document.querySelector('.center-content').style.backgroundColor = 'white'
}

function correction(){
  let title = document.querySelector('.title').innerHTML = 'Exercise 5.1 - JavaScript'
}

function upperCase(){
  let upperCaseP = document.querySelectorAll('p')
  for ( let i = 0; i < upperCaseP.length; i += 1){
    upperCaseP[i].innerText = upperCaseP[i].innerText.toUpperCase()
  }
  
}
// uppercase()

let upperCaseP = document.querySelectorAll('p')
  for ( let i = 0; i < upperCaseP.length; i += 1){
    upperCaseP[i].innerText = upperCaseP[i].innerText.toUpperCase()
  }













// function paragraphUpperCase() {
//   let paragraph = document.getElementsByTagName('p')[0];
//   paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
// }
// paragraphUpperCase();






