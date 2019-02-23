export default (num) => {
  const binNum = num.toString(2); // переводим в двоичное представление и строку
  let max = 0;
  let current = 0;
  for (let i = 0; i < binNum.length; i += 1) {
    if (binNum[i] === '0') current += 1;
    if (binNum[i] === '1') {
      if (current > max) {
        max = current;
        current = 0;
      }
    }
  }
  return max;
};
