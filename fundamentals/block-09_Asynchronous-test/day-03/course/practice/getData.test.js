const getSuperHero = require('./getData');

it('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Wonder Woman');
});

// it('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
//   const error = await getSuperHero();
//   expect(error).toMatch('erro');
// });

