const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0
const sumPair = (currentValue, number) => currentValue + number

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair)