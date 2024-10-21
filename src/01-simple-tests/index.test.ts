// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const res = simpleCalculator({ a: 5, b: 5, action: Action.Add });
    expect(res).toBe(10);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const res = simpleCalculator({ a: 5, b: 5, action: Action.Subtract });
    expect(res).toBe(0);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const res = simpleCalculator({ a: 5, b: 5, action: Action.Multiply });
    expect(res).toBe(25);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const res = simpleCalculator({ a: 5, b: 5, action: Action.Divide });
    expect(res).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const res = simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate });
    expect(res).toBe(8);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const res = simpleCalculator({ a: 23, b: 23, action: 'InvalidAction' as Action });
    expect(res).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const res1 = simpleCalculator({ a: null, b: 3, action: Action.Add });
    const res2 = simpleCalculator({ a: 2, b: null, action: Action.Add });
    const res3 = simpleCalculator({ a: undefined, b: 3, action: Action.Add });
    const res4 = simpleCalculator({ a: 2, b: undefined, action: Action.Add });

    expect(res1).toBeNull();
    expect(res2).toBeNull();
    expect(res3).toBeNull();
    expect(res4).toBeNull();
  });
});
