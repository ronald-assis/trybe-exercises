const { describe, expect, it } = require('@jest/globals');
const {
  createPresentationMessage,
  hackTheDb,
  restartDb,
} = require('./callbacks');

describe('A função createPresentationMessage', () => {

  beforeEach(() => {
    restartDb();
  });

  it('retorna erro quando falha', (done) => {
    const expectedError = new Error('Explodiu');

    hackTheDb();

    function callback(error, result) {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (error) {
        done(error)
      }
    }
    createPresentationMessage((person) => person.name === 'Xuxa', callback);
  });

  it('retorna corretamente a string', (done) => {
    const expectedString =
      'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';
    function callback(error, result) {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    }
    createPresentationMessage((person) => person.name === 'Xuxa', callback);
  });
});