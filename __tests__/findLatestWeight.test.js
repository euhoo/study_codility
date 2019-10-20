import findLatestWeight from '../src/bin/findLatestWeight';

const arr1 = [2, 7, 4, 1, 8, 1];
const arr0 = [2, 7, 4, 1, 9, 1];
const arrEmpty = [];
const arrEmpty2 = [1, 1];
const arr5 = [16, 16, 5];
test('ArrayElements: 1 значение', () => {
  expect(findLatestWeight(arr1)).toEqual(1);
  expect(findLatestWeight(arr5)).toEqual(5);
});

test('ArrayElements2: ноль', () => {
  expect(findLatestWeight(arr0)).toEqual(0);
  expect(findLatestWeight(arrEmpty)).toEqual(0);
  expect(findLatestWeight(arrEmpty2)).toEqual(0);
});
