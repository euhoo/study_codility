import findSingleIndex from '../src/bin/arrayIndex';

const arr5 = [1, 2, 3, 3, 2, 1, 5];
const arr2 = [1, 1, 2, 3, 3, 4, 4, 5, 5];
const arr7 = [1, 2, 1, 3, 2, 3, 4, 5, 4, 6, 5, 6, 7];
const arr1 = [1, 2, 3, 2, 4, 3, 4, 5, 5, 6, 6];
const arr55 = [9, 3, 9, 3, 9, 7, 9];
test('ArrayIndex: где-то в центре', () => {
  expect(findSingleIndex(arr5)).toEqual(5);
  expect(findSingleIndex(arr2)).toEqual(2);
  expect(findSingleIndex(arr55)).toEqual(7);
});

test('ArrayIndex2: скраю', () => {
  expect(findSingleIndex(arr7)).toEqual(7);
  expect(findSingleIndex(arr1)).toEqual(1);
});
