const fetch = require('node-fetch');

// const getSuperHero = () => {
//   const result = fetch('https://www.superheroapi.com/api.php/4192484924171229/720')
//     .then((response) => response.json())
//     .then((hero) => hero.name)
//     .catch(() => 'erro')

//   return result;
// };

const getSuperHero = async () => {
  try {
    const result = await fetch('https://www.superheroapi.com/api.php/4192484924171229/720');
    const response = await result.json();
    const hero = response.name;
    return hero;

  } catch (err) {
    return 'erro 404';
  }
};

getSuperHero(); // Wonder Woman

module.exports = getSuperHero;