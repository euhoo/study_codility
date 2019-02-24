import binary from '../src/bin/binary';
// намерено не проверяю,если введенное число не число

test('Binary 1: нет нулей', () => {
  expect(binary(15)).toEqual(0); // 15 = 1111
});

test('Binary2: последовательность нулей не оканчивается единицей', () => {
  expect(binary(561892)).toEqual(3);// 10001001001011100100
  expect(binary(32)).toEqual(0); // 32 = 100000
});

test('Binary3: вернет значение', () => {
  expect(binary(9)).toEqual(2); // 9 = 1001
  expect(binary(20)).toEqual(1); // 20 = 10100
  expect(binary(1376796946)).toEqual(5); // 1010010000100000100000100010010
});

test('Binary4: несколько валидных цепочек нулей', () => {
  expect(binary(529)).toEqual(4); // 529 = 1000010001
  expect(binary(1041)).toEqual(5); // 1041 = 10000010001
});
