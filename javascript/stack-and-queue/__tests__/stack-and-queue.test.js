'use strict';

const { AnimalShelter, validateBrackets } = require('../index');


describe('AnimalShelter', () => {
  it('Can successfully enqueue into a queue in Animal Shelter', () => {
    let hs = new AnimalShelter();
    hs.enqueue({
      species: 'cat',
      name: 'hammerlock',
    });
    hs.enqueue({
      species: 'dog',
      name: 'lock',
    });
    expect(hs.shelter.front.value.name).toEqual('hammerlock');
  });
  it('Can successfully dequeue out of a Animal Shelter queue using pref ', () => {
    let hs = new AnimalShelter();
    hs.enqueue({
      species: 'cat',
      name: 'hammerlock',
    });
    hs.enqueue({
      species: 'dog',
      name: 'lock',
    });
    let result = hs.dequeue('cat');
    expect(result.name).toEqual('hammerlock');
  });
  it('Can fail dequeue out of a Animal Shelter queue using pref', () => {
    let hs = new AnimalShelter();
    hs.enqueue({
      species: 'cat',
      name: 'hammerlock',
    });
    hs.enqueue({
      species: 'dog',
      name: 'lock',
    });
    let result = hs.dequeue('dog');
    expect(result).toBeNull();
  });
  it('should be able to determine if brackets are balanced', () => {
    let str1 = '(){}[]';
    let str2 = '(()';

    expect(validateBrackets(str1)).toBeTruthy();
    expect(validateBrackets(str2)).tobBeFalsy();
  });

});
