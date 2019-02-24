export default (arr) => {
  const check = {};
  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    if (current in check) delete check[current];
    else check[current] = current;
  }
  return Object.values(check)[0];
};
