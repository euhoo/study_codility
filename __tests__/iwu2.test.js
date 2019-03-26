import almostPalindromes from '../src/bin/iwu2';


test('Test1', () => {
  expect(almostPalindromes('abba')).toEqual(0);
});
test('Test2', () => {
  expect(almostPalindromes('abcdcaa')).toEqual(2);
});
test('Test3', () => {
  expect(almostPalindromes('aaabbb')).toEqual(6);
});
