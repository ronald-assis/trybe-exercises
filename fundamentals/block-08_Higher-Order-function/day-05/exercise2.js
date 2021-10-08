/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
  Dica: use parâmetro rest .
*/
const sum = (...sum) => sum.reduce(((acc, crr) => acc + crr))

console.log(sum(1,2,3))