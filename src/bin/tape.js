export default (arr) => {
  let firstSum = 0;
  const sum = arr.reduce((acc, item) => acc + item, 0);
  let min = Math.max.apply(null, arr) ** 2;
  for (let i = 0; i < arr.length - 1; i += 1) {
    firstSum += arr[i];
    const secondSum = sum - firstSum;
    const dif = Math.abs(firstSum - secondSum);
    if (dif < min) min = dif;
  }
  return min;
};
