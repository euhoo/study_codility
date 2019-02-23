import findSingleIndex from '../src/bin/arrayMissed';

const arr4 = [5, 3, 2, 1]; // в середине
const arr2 = [1, 3, 7, 5, 4, 8, 11, 10, 9, 6]; // в середине
const arr1 = [2, 3, 11, 10, 8, 9, 4, 7, 6, 5, 12]; // не хватает единицы

test('ArrayMissed: где-то в центре', () => {
  expect(findSingleIndex(arr4)).toEqual(4);
  expect(findSingleIndex(arr2)).toEqual(2);
});

test('ArrayMissed2: не хватает единицы', () => {
  expect(findSingleIndex(arr1)).toEqual(1);
});
