// nosso jog 
let priGame = [7,21,33,45,56,60]

//sorteou os numeros
let firstNnumber = Math.floor(Math.random() * 60 ) + 1
let secundNnumber = Math.floor(Math.random() * 60 ) + 1
let thirdNnumber = Math.floor(Math.random() * 60 ) + 1
let fourthNnumber = Math.floor(Math.random() * 60 ) + 1
let fifthNnumber = Math.floor(Math.random() * 60 ) + 1
let sixthNnumber = Math.floor(Math.random() * 60 ) + 1

//Amazenou os numeros 
let megaSenaNumbes = [firstNnumber, secundNnumber, thirdNnumber, fourthNnumber, fifthNnumber, sixthNnumber]

//confeir
let numberOfHits = 0

for(let i = 0; i < megaSenaNumbes.length; i+= 1){
  let drawnNumber = megaSenaNumbes[i]
  
  for(let gameIndex = 0; gameIndex < priGame.length; gameIndex += 1){
    priNumber = priGame[gameIndex]

    if (drawnNumber === priNumber){
      numberOfHits += 1
    }
  }
}
// Esse código será repetido n vezes
console.log('JM:' + megaSenaNumbes)
console.log('JP:' + priGame)
console.log('EA:' + numberOfHits)