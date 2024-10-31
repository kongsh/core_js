/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR));

// undefined, null
let days = null;
console.log(days + '');

let undef = undefined;
console.log(undef + '');

// boolean

let isClicked = true;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));

// null

let money = null;
console.log(money / 1);

// boolean
let isActive = [];

console.log(isActive * 1);

// string

let num = '100';

console.log(+num);

// numeric string

const width = '120.5px';

console.log(parseInt(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// false
console.log(Boolean(friend));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));

// true
console.log(Boolean(' '));
console.log(Boolean('0'));
console.log(!!'0');
console.log(!!{});
console.log(!![]);
console.log(Boolean(() => {}));
