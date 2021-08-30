let queenRowPosition = 6
let queenColumnPosition = 4

let opponentRowPosition = 4
let opponentColumnPosition = 5

let canAttack = false

if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition){
  canAttack = true
}

for(let upperRight = 1; upperRight < 8; upperRight += 1){
  let currentQueenRow = queenRowPosition + upperRight
  let currentQueenColumn = queenColumnPosition + upperRight
  
  if(currentQueenRow > 8 || currentQueenColumn > 8){
    break
  }
  

  if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
    canAttack = true
    break
  }
  console.log('pode coluna atacar')
}

for (let lowerLeft = 1; lowerLeft < 8; lowerLeft+=1){
  let currentQueenRow = queenRowPosition - lowerLeft
  let currentQueenColumn = queenColumnPosition - lowerLeft

  if(currentQueenRow === 0 || currentQueenColumn === 0 ){
    break
  }

  if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
    canAttack = true
    break
  }
  console.log('pode vertical atacar')
}


for ( let upperLeft =1; upperLeft < 8; upperLeft+=1){
  let currentQueenRow = queenRowPosition +  upperLeft
  let currentQueenColumn = queenColumnPosition - upperLeft

  if(currentQueenRow > 8 || currentQueenColumn == 0){
    break
  }

  if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
    canAttack = true
    break
  }
  console.log('pode esquerda atacar')
}

for (let lowerRight = 1; lowerRight < 8; lowerRight +=1 ){
  let currentQueenRow = queenRowPosition - lowerRight
  let currentQueenColumn = queenColumnPosition + lowerRight

  if(currentQueenRow === 0 || currentQueenColumn > 8 ){
    break
  }

  if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
    canAttack = true
    break
  }
  console.log('pode esquerda atacar')
}
console.log('pode atacar', canAttack)