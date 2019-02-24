import findSingleIndex from '../src/bin/frogRiverOne';

const arr6 = [1, 2, 3, 4, 2, 1, 5]; // 5
const arrMinus1 = [1, 1, 2, 4, 4, 5, 5]; // -1
const arr10 = [10, 8, 9, 2, 5, 4, 6, 3, 7, 5, 1, 7]; // 10
const arrMinus11 = [2, 3, 2, 4, 3, 4, 5, 5, 6, 6]; // -1
const arr0 = [1, 3, 9, 3, 9, 7, 9]; // 0


test('Frog River One 1: перепрыгнет', () => {
  expect(findSingleIndex(arr6, 5)).toEqual(6);
  expect(findSingleIndex(arr10, 10)).toEqual(10);
  expect(findSingleIndex(arr0, 1)).toEqual(0);
});

test('ArrayIndex2: скраю', () => {
  expect(findSingleIndex(arrMinus1, 5)).toEqual(-1);
  expect(findSingleIndex(arrMinus11)).toEqual(-1);
});
