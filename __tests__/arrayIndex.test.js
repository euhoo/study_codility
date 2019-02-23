import findSingleIndex from '../src/bin/arrayIndex';

const arr5 = [1, 2, 3, 3, 2, 5, 1];
const arr2 = [1, 1, 2, 3, 3, 4, 4, 5, 5];
const arr12 = [1, 2, 1, 3, 2, 3, 4, 5, 4, 6, 5, 6, 7];
const arr0 = [1, 2, 3, 2, 4, 3, 4, 5, 5, 6, 6];
test('ArrayIndex: где-то в центре', () => {
  expect(findSingleIndex(arr5)).toEqual(5);
  expect(findSingleIndex(arr2)).toEqual(2);
});

test('ArrayIndex2: скраю', () => {
  expect(findSingleIndex(arr12)).toEqual(12);
  expect(findSingleIndex(arr0)).toEqual(0);
});
