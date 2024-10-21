// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: '1', b: 2, action: Action.Add, expected: null },
    { a: 5, b: 3, action: Action.Subtract, expected: 2 },
    { a: 10, b: 2, action: Action.Subtract, expected: 8 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 8, b: 4, action: Action.Divide, expected: 2 },
    { a: 10, b: 0, action: Action.Divide, expected: Infinity },
    { a: -2, b: 3, action: Action.Exponentiate, expected: -8 },
    { a: -2, b: 2, action: Action.Exponentiate, expected: 4 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
    
    
    
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    'returns $expected for $a $action $b',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    }
  );
});
