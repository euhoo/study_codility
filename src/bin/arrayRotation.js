export default (arr, num) => {
  const arrCopied = arr.slice(); // делаю копию,чтобы не менять исходный массив
  for (let i = 0; i < num; i += 1) {
    const item = arrCopied[arr.length - 1];
    arrCopied.unshift(item);
    arrCopied.pop();
  }
  return arrCopied;
};
