/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

/* Напишите функцию, которая принимает предложение и возвращает количество
 содержащихся в нем четырехбуквенных слов.
 не беспокойтесь о пунктуации. 10 минут.
 */

export default sentence => sentence
  .split(' ')
  .reduce((acc, item) => ((item.length === 4) ? acc += 1 : acc), 0);
