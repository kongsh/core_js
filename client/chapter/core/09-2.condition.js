/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// logical or assignment
// a = a || b;
// a ||= b;

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

// let userName = prompt('Name', '');

// if (Boolean(userName) === false) {
//   console.log('canceled');
// } else if (userName.toUpperCase() === 'ADMIN') {
//   let pwd = prompt('password', '');

//   if (Boolean(pwd) === false) {
//     console.log('canceled');
//   } else if (pwd.toUpperCase() === 'THEMASTER') {
//     console.log('Welcome!');
//   } else if (pwd.includes(' ')) {
//     console.log('비밀번호에 공백문자를 빼주세요');
//   } else {
//     console.log('Wrong password');
//   }
// } else if (userName.includes(' ')) {
//   console.log('아이디에 공백문자를 빼주세요');
// } else {
//   console.log('존재하지 않는 아이디입니다.');
// }

function login() {
  let userName = prompt('누구?');

  // if (userName === null || userName === undefined) return;
  // if (!userName) return;

  if (userName?.toLowerCase() === 'admin') {
    let pwd = prompt('비밀번호');

    if (pwd?.toLowerCase() === 'admin') {
      console.log('성공');
    } else if (pwd === null || pwd === '') {
      console.log('취소됐습니다.');
    } else {
      console.log('제대로 된 값을 입력해주세요.');
    }
  } else if (userName === null || userName === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('제대로 된 값을 입력해주세요.');
  }
}
