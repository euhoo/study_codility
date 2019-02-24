import findElements from '../src/bin/permCheck';

const arr1 = [1, 2, 3, 5, 6, 7, 4]; // 1
const arr11 = [4, 6, 5, 1, 3, 2, 7]; // 1
const arr00 = [2, 4, 5, 6, 7]; // 0
const arr0 = [1, 2, 3, 4, 5, 6, 8];// 0
const arr = [1, 1, 3, 4, 5, 6]; // 0

test('PermCheck1: перестановка', () => {
  expect(findElements(arr1)).toEqual(1);
  expect(findElements(arr11)).toEqual(1);
});

test('PermCheck1: не перестановка', () => {
  expect(findElements(arr00)).toEqual(0);
  expect(findElements(arr0)).toEqual(0);
});
test('PermCheck1: ошибка', () => {
  expect(findElements(arr)).toEqual(0);
});
