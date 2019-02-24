export default (arr) => {
  const max = Math.max.apply(null, arr);
  const set = new Set(arr);
  const arr2 = Array.from(set);
  const { length } = arr;
  if (arr.length !== arr2.length) return 0;
  return (max === length) ? 1 : 0;
};
