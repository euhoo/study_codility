import findSingleIndex from '../src/bin/arrayRotation';

const arr1 = [3, 8, 9, 7, 6];
const arr2 = [0, 0, 0];
const arr3 = [1, 2, 3, 4];
test('ArrayRotation: частичный переворот', () => {
  expect(findSingleIndex(arr1, 3)).toEqual([9, 7, 6, 3, 8]);
  expect(findSingleIndex(arr2, 1)).toEqual(arr2);
});

test('ArrayRotation2: полный переворот', () => {
  expect(findSingleIndex(arr3, arr3.length)).toEqual(arr3);
});
