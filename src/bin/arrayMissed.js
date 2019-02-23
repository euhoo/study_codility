export default (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const length = arr.length + 1;
  let some = 0;
  for (let i = 0; i <= length; i += 1) {
    some += i;
  }
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
