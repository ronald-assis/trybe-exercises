// Exercise 1 --- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; 
let tagH1 = document.createElement('h1')
tagH1.className = 'title'
tagH1.innerHTML = 'Exercise 5.2 - JavaScript DOM'
document.body.appendChild(tagH1)

// Exercise 2 --- Adicione a tag main com a classe main-content como filho da tag body ; 
let main = document.createElement('main')
main.className = 'main-content'
document.body.appendChild(main)

// Exercise 3 --- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; 
let sectionOne = document.createElement('section')
sectionOne.className = 'center-content'
sectionOne.style.backgroundColor = '#036b52'
sectionOne.style.color = 'white'
sectionOne.style.textAlign = 'center'
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
sectionThree.style.marginRight = 'auto'
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
  titleH3.className = 'description'
  titleH3.innerHTML = `title h${index}`
  main.appendChild(titleH3)

}


// Bonus are in your tags
// 1. Adicione a classe title na tag h1 criada; 
// 2. dicione a classe description nas 3 tags h3 criadas; 
// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ; 
main.removeChild(sectionTwo)
// 4. entralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ; 
// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde; 
// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

unorderedList.lastElementChild.remove()
unorderedList.lastElementChild.remove()
