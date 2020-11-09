
// ✅ ES6 Way
export function formatCurrencyEUR(price) {
   const money = price / 100;
   const value = new Intl.NumberFormat('it-IT',
      { style: 'currency', currency: 'EUR' }
   ).format(money);
   return value;
}

/*
ATTENTION! 
TODO escape string in input with backslashes, otherwise cant do the right parsing 
*/
export function getFieldInJsonString(index, str, test) {
   if (str) {
      let arr = str.split(',');
      const temp = (arr[index].split(':')[1]);
      test = temp.slice(1, temp.length - 1);
   } else test = null
   // console.log('getFieldInJsonString found==', test);
   return test;
}
