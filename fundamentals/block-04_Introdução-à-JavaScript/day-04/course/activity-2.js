/*  1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

    Exemplo de palíndromo: arara .
    verificaPalindrome('arara') ;
    Retorno esperado: true
    verificaPalindrome('desenvolvimento') ;
    Retorno esperado: false

*/

// FORMA COM EU FIZ
function checkPalindrome(palindrome){
  if(palindrome === palindrome.split('').reverse().join('')){
    return palindrome = true 
  }else{
    return palindrome = false
  }
}
console.log(checkPalindrome('pingo'))

//COMO EU PODERIA TER FEITO
/*
function checkPalindrome(palindrome){
  let reverse = palindrome.split('').reverse().join(')
  if(reverse === palindrome){
    return true
  }else{
    return false
  }
}

OU 

function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}
*/