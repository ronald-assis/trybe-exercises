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

for (key in person){
  console.log(key)
}