import { filter, findIndex, map } from './array-methods.js';

describe('take array, make changes to items in array, return changed items in new array', () => {
  it('take array of names, capitalize names and add to new array', () => {
    const names = ['joe', 'mama', 'bill'];
    function upperCase(str) {
      return str.toUpperCase();
    }
    expect(map(names, upperCase)).toEqual(['JOE', 'MAMA', 'BILL']);
  });

  it('take array of names, returns new array if names start with j', () => {
    const names = ['joe', 'mama', 'james', 'bill'];
    function justJNames(str) {
      return str[0] === 'j';
    }
    expect(filter(names, justJNames)).toEqual(['joe', 'james']);
  });

  it('take array of names, returns index of first name that starts with m', () => {
    const names = ['joe', 'mama', 'james', 'bill'];
    function justBNames(str) {
      return str[0] === 'b';
    }
    expect(findIndex(names, justBNames)).toEqual(3);
  });
});
