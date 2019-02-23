export default (num) => {
  const binNum = num.toString(2); // переводим в двоичное представление и строку
  const obj = {
    current: 0,
    max: 0,
  };
  for (let i = 0; i < binNum.length; i += 1) {
    const value = binNum[i];
    if (value === '0') obj.current += 1;
    if (value === '1') {
      if (obj.current > obj.max) {
        obj.max = obj.current;
        obj.current = 0;
      }
    }
  }
  return obj.max;
};
