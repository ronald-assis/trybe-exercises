let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let menuServices = menu[1]

let indexOfPortfolio = menu.indexOf('Portfólio');

menu.push('Contato')

// console.log(menuServices)
// console.log(indexOfPortfolio);

for(let i = 0; i < menu.length; i+= 1){
  // console.log(menu[i])
}


timesTables = 9

for(let i = 0; i <= 9; i += 1){
  // console.log(timesTables * i)
}

let nameList = ['Ronald', 'Ingrid', 'Vinicius']

for(i = 0; i < nameList.length; i += 1){
  let messagen = `Boas vindas ${nameList[i]} !`
  // console.log(messagen)
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i+=1){
  // console.log(groceryList[i])
}


let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
  // console.log(name)
}

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0
  
// for(let i = 0; i < numbers.length; i += 1 ){
  // sum += numbers[i]
  // 
// }

// let average = sum / numbers.length

// if (average > 20){
  // console.log(`valor maior que 20`)
// }else if (average <= 20){
  // console.log('valor menor ou igual a 20')


// let bigNum = 0

// for(i = 0; i < numbers.length; i += 1){
//   if(numbers[i] > bigNum){
//     bigNum = numbers[i]
//   }
// }
// let finish = bigNum
//  console.log(finish)

// let odd = 0

// for(let i = 0; i < numbers.length; i += 1){
//   if(numbers[i] % 2 !== 0){
//     odd += 1
//   }  
// }
// if(odd === 0 ){
//   console.log('nenhum valor ímpar encontrado')
// }else{
//   console.log(odd)
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minNum = numbers[0]

for (let i = 1; i < numbers.length; i += 1){
  if(numbers[i] < minNum){
    minNum = numbers[i]
  } 
}

console.log(minNum)

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
let divide = 0

for(let i = 0; i< array.length; i+=1){
  divide += array[i]
  console.log(divide / 2)
}