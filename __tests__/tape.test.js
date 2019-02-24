import findElements from '../src/bin/tape';

const arr2 = [1, 2, 3, 5, 7, 9, 11]; // 2
const arr0 = [4, 6, 10, 9, 11, 5, 13]; // 0
const arr1 = [15, 2, 3, 4, 7]; // 1
const arr3 = [2, 4, 6, 15]; // 3
const arr = [12, 12, 12, 12]; // 0
const empty = [];
const arrMinus2 = [1, 5, -2, 3, 3, -4]; // 2
const arrMinus22 = [1, 5, -2, -3, 3, -4]; // 2

test('Tape: значение существует', () => {
  expect(findElements(arr2)).toEqual(2);
});

test('Tape2: разница ноль', () => {
  expect(findElements(arr0)).toEqual(0);
});
test('Tape3: скраю', () => {
  expect(findElements(arr1)).toEqual(1);
  expect(findElements(arr3)).toEqual(3);
});
test('Tape4: значения одинаковые', () => {
  expect(findElements(arr)).toEqual(0);
});
test('Tape5: пустой массив', () => {
  expect(findElements(empty)).toEqual('error');
});
test('Tape6: есть отрицательные элементы в массиве', () => {
  expect(findElements(arrMinus2)).toEqual(2);
  expect(findElements(arrMinus22)).toEqual(2);
});
