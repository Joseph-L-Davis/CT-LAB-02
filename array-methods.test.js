import { every, filter, findIndex, map, reduce } from './array-methods.js';

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

  it('take array of names, returns true if all items start with a b', () => {
    const names = ['boe', 'bama', 'bames', 'bill', 'besus'];
    function justBNames(str) {
      return str[0] === 'b';
    }
    expect(every(names, justBNames)).toBe(true);
  });

  it('take array of numbers, returns sum of numbers', () => {
    const nums = [1, 2, 3, 4, 5];
    function sumOfNums(acc, num) {
      acc += num;
      // console.log(acc);
      return acc;
    }
    expect(reduce(nums, sumOfNums, 0)).toBe(15);
  });

  it('take array of names, returns first letter of each item', () => {
    const names = ['michael', 'tito', 'joe', 'jackson'];
    function firstLetterGrabber(acc, str) {
      acc += str[0];
      // console.log(acc);
      return acc;
    }
    expect(reduce(names, firstLetterGrabber, '')).toBe('mtjj');
  });

  it('take array of names, returns only names that start with t', () => {
    const names = ['michael', 'tito', 'joe', 'jackson', 'tony'];
    function tNamesOnly(acc, str) {
      if(str[0] === 't'){
        acc += (str + ' ');
      }
      // console.log(acc);
      return acc;
    }
    expect(reduce(names, tNamesOnly, '')).toBe('tito tony ');
  });
});
