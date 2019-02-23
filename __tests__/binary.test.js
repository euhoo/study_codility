import binary from '../src/bin/binary';
// намерено не проверяю,если введенное число не число

test('Test 1:нет 0', () => {
  expect(binary(15)).toEqual(0); // 15 = 1111
});

test('Test 2:последовательность нулей не оканчивается единицей', () => {
  expect(binary(32)).toEqual(0); // 32 = 100000
});

test('Test 3: вернет значение', () => {
  expect(binary(9)).toEqual(2); // 9 = 1001
  expect(binary(20)).toEqual(1); // 20 = 10100
});

test('Test 4: несколько валидных цепочек нулей', () => {
  expect(binary(529)).toEqual(4);
  expect(binary(1041)).toEqual(5);
});
