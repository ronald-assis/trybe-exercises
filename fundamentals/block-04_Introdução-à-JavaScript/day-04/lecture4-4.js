let person = {
  name: 'Roanld',
  lastName: 'Assis',
  age: 21,
  canDrive: true,
  movies:['I ron man', 'toy story'],
  favoriteNumbers: [6,5],
  address: {
    street: 'Rua XYZ',
    number: 123,
    city: 'São Paulo'
  }
}
// console.log(person.lastName)
// console.log(person['lastName'])
// for (key in person){
//   console.log(key)
// }



//FUNCTIONS
function printGreeting(name){
  // console.log(`Olá, ${name}`)
}
printGreeting('ronald')

function makeGreeting(name){
  return `E aí ${name} ? Tudo bem com você?`
}

let greeting = makeGreeting('ronald') 

console.log(greeting)

function canDrive(age){
  if(age >= 18){
    return true
  }else{
    return false
  }
}