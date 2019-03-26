import numbersUpTo from '../src/bin/iwu3';

const arr = [1, 3, 2, 4, 20, 11, 2, 1, 5, 3];
const arr2 = [1, 3, 2, 4, 20, 11, 2, 1, 5];
const k = 5;
const k2 = 6;

test('Test1', () => {
  expect(numbersUpTo(arr, k)).toEqual([[2, 3], [1, 4]]);
});

test('Test2', () => {
  expect(numbersUpTo(arr, k2)).toEqual([[2, 4], [3, 3], [1, 5]]);
});

test('Test3', () => {
  expect(numbersUpTo(arr2, k2)).toEqual([[2, 4], [1, 5]]);
});
