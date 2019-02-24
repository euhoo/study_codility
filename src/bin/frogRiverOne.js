export default (arr, num) => {
  const sum = num * (num + 1) / 2;
  const set = new Set();
  let currentSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] <= num && !set.has(arr[i])) {
      set.add(arr[i]);
      currentSum += arr[i];
      if (currentSum === sum) return i;
    }
  }
  return -1;
};
