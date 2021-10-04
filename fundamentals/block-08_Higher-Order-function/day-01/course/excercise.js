// Requirement one
const createEmail = (person) => {
  const email = `${person.toLowerCase().replace(' ', '_')}@trybe.com`;
  return {person, email};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Crumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Requirement two
const numberChecker = (betNumber, drawNumber) => betNumber === drawNumber;

const drawResult = (betNumber, callback) => {
  const drawNumber =  Math.floor(Math.random()*5 + 1)
  return callback(betNumber, drawNumber) ? 'Parabéns você ganhou' : 'Tente novamente'

}