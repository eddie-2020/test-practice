import Calculator from './Calculator';

import { StringLength, reverseString, capitalizeFirstChar }  from './functions';

describe('Check strings length from 1 to 10', () => {
  describe('String length function', () => {
    test('To check length of string', () => {
      expect(StringLength.toString('test')).toBeDefined();
      expect(StringLength.toString('test')).toBeTruthy();
    });
  });
});

describe('Check if the string is reversed', () => {
  describe('Reverse string', () => {
    test('if string is reversed', () => {
      expect(reverseString.toString('tset')).toBeDefined();
      expect(reverseString.toString()).toBeTruthy();
    });
  });
});


const calc = new Calculator(2, 3);
describe('Calculator class', () => {
    describe('Add function', () => {
        test('To add two numbers', () => {
            expect(calc.add()).toBe(5);
            expect(calc.add()).toBeTruthy();
            expect(calc.add() === 3).toBeFalsy()
          });
          
          test('To subtract two numbers', () => {
             expect(calc.subtract()).toBeTruthy();
             expect(calc.subtract()).toBe(-1);
             expect(calc.subtract() === 4).toBeFalsy();
          });

          test('To devide two numbers', () => {
            expect(calc.divide()).toBeDefined();
            expect(calc.divide()).toBeTruthy();
            expect(calc.divide() === 3).toBeFalsy();
          });

          test('To multiply two numbers', () => {
            expect(calc.multiply()).toBeDefined();
            expect(calc.multiply()).toBeTruthy();
            expect(calc.multiply() === 6).toBeTruthy();
            expect(calc.multiply() === 2).toBeFalsy();
          });
    });
});

describe('To check if the first char of the string is capitalizd', () => {
  describe('Check if first letter is upperCase', () => {
    test('first Character capitalized', () => {
      expect(capitalizeFirstChar.toString('Test')).toBeDefined();
      // expect(StringLength.toString()).toBe('Test');
      expect(capitalizeFirstChar.toString('Test')).toBeTruthy();
      expect(capitalizeFirstChar.toString() === 'test').toBeFalsy();
      // expect(StringLength.toString('Test')).toBe('Test');
    });
  });
});