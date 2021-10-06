// 1. Gerar um número aleatorio 

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 60) + 1
  return randomNumber
}


// 2. Gerar um jogo (sortear os números)
function generateGame() {
  let megaSenaDraw = []

  // mecanismo p/ sortear SEIS numeros 
  for (let i = 1; i <= 6; i += 1) {
    //pegar um numero aleatorio
    let randomNumber = generateRandomNumber()
    // colocar esse numero aleatorio no array megaSenaDraw
    megaSenaDraw.push(randomNumber)
  }

  return megaSenaDraw
}

// 3. Conferir um jogo e compará-lo com o resultadi da mega sena
// eu preciso do meu jogo
// eu preciso do resultado da mega sena 
// Contar quantos números eu acertei no meu jogo

function checkMegaSenaResult(result, game) {
  let numberOfHits = 0

  for (let i = 0; i < result.length; i += 1) {
    let drawnNumber = result[i]

    for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
      priNumber = game[gameIndex]

      if (drawnNumber === priNumber) {
        numberOfHits += 1
      }
    }
  }
  return numberOfHits
}


//Armazenou os números sorteados
let megaSenaNumbes = generateGame()

//Numeros dos jogadores
let ingridGame = [7, 21, 33, 45, 56, 60]
let ronaldGame = generateGame()


console.log('Jogo da mega sena: ' + megaSenaNumbes)
console.log('Jogo da Ingrid: ' + ingridGame)
console.log('a pri teve: '+ checkMegaSenaResult(generateGame, ingridGame) + ' pontos' )


console.log(`Jogo da Mega sena: ${megaSenaNumbes}`)
console.log(`Jogo do Ronald: ${ronaldGame}`)
console.log(`Ronald teve: ${checkMegaSenaResult(generateRandomNumber, ronaldGame)} pontos.`)








