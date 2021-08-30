// let fruits = [3, 4, 10, 1, 12]

// let sum = 0

// for(i = 0; i < fruits.length; i += 1){
//   sum += fruits[i]
// }

// if(sum > 15){
//   console.log(sum)
  
// }else if(sum <= 15){
//   console.log('Valor menor que 16')
// }



// let asterisk = false

// criar um laço de repetição para adicionar os '*' até 'n'

// for (let l = 0; l < n; l+=1){  
  //   linha+= asterisk
  // }
  // for(let c = 0; c< n; c+=1){
    // }
    
let n = 5
let asterisk = '*'
let linha = ''
let midOfMatrix = (n + 1) / 2
let controlLeft = midOfMatrix
let controlRight = midOfMatrix

for (let l = 0; l <= midOfMatrix; l+=1){  
  for (let c = 0; c <=n; c+=1){
     if(c > controlLeft && c < controlRight){
       linha += asterisk
     }else{
      linha += ' '
     }
  }
  console.log(linha)
  linha+= '';
 controlRight += 1
 controlLeft -+ 1
}


