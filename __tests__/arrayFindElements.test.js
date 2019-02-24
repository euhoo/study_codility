import findElements from '../src/bin/arrayFindElements';

const arr4 = [1, 2, 3, 5, 7, 9, 11]; // 4,6,8,10
const arr13 = [4, 6, 10, 9, 11, 5, 13]; // [7,8,12]
const arr1 = [1, 2, 3, 4, 7, 5]; // 6
const arr3 = [2, 4, 5, 6, 7]; // 3
const arr0 = [1, 2, 3, 4, 5, 6, 7];// 0
test('ArrayElements: 1 значение', () => {
  expect(findElements(arr3)).toEqual([3]);
  expect(findElements(arr1)).toEqual([6]);
});

test('ArrayElements2: несколько значений', () => {
  expect(findElements(arr13)).toEqual([7, 8, 12]);
  expect(findElements(arr4)).toEqual([4, 6, 8, 10]);
});
test('Arrayelements3: массив полный', () => {
  expect(findElements(arr0)).toEqual([]);
});
