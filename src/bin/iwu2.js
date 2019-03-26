/* 2 задача. Напишите функцию, которая возвращает количество
ошибок (символов,которые не совпадают) в палиндроме при сравнении исходной и обратной строки.
 Например для слова "fox" вернется 2, т.к. "fox" и "xof" отличаются на 2 символа. 15 минут.
 */

export default (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) count += 1;
  }
  return count;
};

/* интересный метод через массив
export default str => str
  .split('')
  .reduce((acc, _item, i) =>
    (str[i] !== str[str.length-1-i])? acc += 1 : acc, 0);
*/
