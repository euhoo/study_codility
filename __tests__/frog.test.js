import findSingleIndex from '../src/bin/frog';

test('Frog:прыгать нужно(X<Y)', () => {
  expect(findSingleIndex(10, 85, 30)).toEqual(3);
  expect(findSingleIndex(10, 90, 20)).toEqual(4);
  expect(findSingleIndex(10, 90, 90)).toEqual(1);
  expect(findSingleIndex(10, 91, 20)).toEqual(5);
});

test('Frog:изначально уже на том берегу(X=Y)', () => {
  expect(findSingleIndex(90, 90, 20)).toEqual(0);
});
