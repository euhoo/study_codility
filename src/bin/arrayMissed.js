export default (arr) => {
  let sum = 0;
  // eslint-disable-next-line no-return-assign
  arr.forEach(item => sum += item);
  const l = arr.length + 1;
  const some = l * (l + 1) / 2;
  return some - sum;
};


/*
//тут сортировка-менее эффективно
export default (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i += 1) {
    if (!(arr[i] === i + 1)) return i + 1;
  }
};
*/
