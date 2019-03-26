export default (arr) => { // n-начало k-конец
  const set = new Set(arr);
  const n = Math.min.apply(null, arr);
  const k = Math.max.apply(null, arr);
  const res = [];
  for (let i = n; i < k; i += 1) {
    if (!set.has(i)) res.push(i);
    // if (!arr.includes(i)) res.push(i); // так медленнее
  }
  return res;
};
