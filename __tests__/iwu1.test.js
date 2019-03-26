import fourLetterWords from '../src/bin/iwu1';


test('Test1', () => {
  expect(fourLetterWords('This sentence is fine')).toEqual(2);
});
test('Test2', () => {
  expect(fourLetterWords('So is this one')).toEqual(1);
});
test('Test3', () => {
  expect(fourLetterWords('Hello')).toEqual(0);
});
