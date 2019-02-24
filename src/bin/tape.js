export default (arr) => {
  if (arr.length === 0) return 'error';
  let sum = 0;
  let firstSum = 0;
  arr.forEach(item => sum += item);
  let min = Math.max.apply(null, arr);
  for (let i = 0; i < arr.length - 1; i += 1) {
    firstSum += arr[i];
    const secondSum = sum - firstSum;
    const dif = Math.abs(firstSum - secondSum);
    if (dif < min) min = dif;
  }
  return min;
};
