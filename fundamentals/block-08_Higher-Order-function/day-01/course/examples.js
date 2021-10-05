// exemplo.
// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

const awakening = () => 'Acordando!!'
const breakfast = () => 'Bora tomar café!!'
const sleep = () => 'Partiu dormir!!'

const doingThings = (func) => func()

console.log(doingThings(awakening))
console.log(doingThings(breakfast))
console.log(doingThings(sleep))