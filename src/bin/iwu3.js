/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
/*
3 задача. Дан массив числовых элементов и число k.
Вывести все уникальные пары элементов, сумма которых равна k.
Например [1,3,2,4,20,11,2,1,3] k=5
выведет [2,3], [1,4]
*/
// вариант без рекурсии
export default (nums, k) => {
  const check = new Set();
  const result = [];
  const set = new Set(nums);
  const half = k / 2;
  let countHalf = 0;

  for (const item of set) {
    if (item === half) {
      nums.forEach((i) => {
        if (i === half) countHalf += 1;
      });
      if ((countHalf % 2 === 0) && countHalf > 0) result.push([half, half]);
    } else if (set.has(k - item) && !check.has(k - item)) {
      check.add(item);
      result.push([item, k - item].sort());
    }
  }
  return result.reverse();
};
