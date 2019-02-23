// eslint-disable-next-line consistent-return
export default (startPos, finishPos, step) => {
  let sum = startPos;
  for (let i = 0; i < finishPos; i += 1) {
    if (sum >= finishPos) return i;
    sum += step;
  }
};
