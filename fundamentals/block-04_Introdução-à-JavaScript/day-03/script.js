let fruits = [3, 4, 10, 1, 12]

let sum = 0

for(i = 0; i < fruits.length; i += 1){
  sum += fruits[i]
}

if(sum > 15){
  console.log(sum)
  
}else if(sum <= 15){
  console.log('Valor menor que 16')
}