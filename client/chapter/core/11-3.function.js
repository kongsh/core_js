/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  let total = 0;

  // for (let i = 0; i < rest.length; i++) total += rest[i];

  // for (const value of rest) total += value;

  // rest.forEach((value) => (total += value));

  // total = rest.reduce((acc, cur) => {
  //   return (acc += cur);
  // }, 0);

  return rest.reduce((acc, cur) => acc + cur, 0);

  // return total;
};

// calcAllMoney(10000, 30000, 50000)

let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

console.log(_calcAllMoney(10000, 30000, 50000));

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount) => {

//   let total = 1;

//   for(let i = 0; i < powerCount; i++){
//     total = total * numeric
//   }

//   return total
// };

// console.log( pow(2,53)  );

// let pow = (numeric,powerCount) => {
//   return Array(powerCount).fill(null).reduce((acc,cur)=>{
//     return acc * cur
//   })
// }

let pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');

console.log(repeat('asd', 3));
