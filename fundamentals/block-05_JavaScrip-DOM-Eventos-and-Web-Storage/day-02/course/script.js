// Exercise 1 --- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; 
let tagH1 = document.createElement('h1')
tagH1.innerHTML = 'Exercise 5.2 - JavaScript DOM'
document.body.appendChild(tagH1)

// Exercise 2 --- Adicione a tag main com a classe main-content como filho da tag body ; 
let main = document.createElement('main')
main.className = 'main-content'
document.body.appendChild(main)

// Exercise 3 --- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; 
let sectionOne = document.createElement('section')
sectionOne.className = 'center-content'
main.appendChild(sectionOne)

// Exercise 4 --- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; 
let elementP = document.createElement('p')
elementP.innerHTML = 'text for test'
sectionOne.appendChild(elementP)

// Exercise 5 --- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; 
let sectionTwo = document.createElement('section')
sectionTwo.className = 'left-content'
main.appendChild(sectionTwo)

// Exercise 6 --- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; 
let sectionThree = document.createElement('section')
sectionThree.className = 'right-conten'
main.appendChild(sectionThree)

// Exercise 7 ---  Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img')
img.className = 'small-image'
img.src = 'https://picsum.photos/200' // ou img.setAttribute('src',"https://picsum.photos/200")  
sectionTwo.appendChild(img)

// Exercise 8 --- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6; 
let unorderedList = document.createElement('ul')
sectionThree.appendChild(unorderedList)
let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten']
for(let i = 0; i < numbers.length; i+=1){
  let number = numbers[i]
  let numList = document.createElement('li')
  numList.innerHTML = number
  unorderedList.appendChild(numList )
}

// Exercise 9 --- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for(let index = 1; index <= 3; index += 1){
  let titleH3 = document.createElement('h3')
  titleH3.innerHTML = `title h${index}`
  main.appendChild(titleH3)

}
