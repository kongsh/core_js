/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uuid: crypto.randomUUID(),
  name: 'kimleepark',
  email: 'kimleepark@naver.com',
  isSignin: false,
  permission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignin);
console.log(authUser.permission);

console.log((authUser.permission = 'free'));

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignin']);
console.log(authUser['permission']);

console.log((authUser['permission'] = 'paid'));

const keys = Object.keys(authUser);
console.log(keys);

// function getPropertiesKey(obj) {
//   let arr = [];

//   for (const key in obj) {
//     if (Object.hasOwn(obj, key)) arr.push(key);
//   }

//   return arr;
// }

function getProperties(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) arr.push([key, obj[key]]);
  }

  return arr;
}

getProperties(authUser);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name,
    age,
    [calculateProperty + '번호']: phone,
  };
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// delete authUser.uuid;

function removeProperty(obj, key) {
  if (isObject(obj)) obj[key] = null;
}

removeProperty(authUser, 'uuid');

function deleteProperty(obj, key) {
  if (isObject(obj)) delete obj[key];
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1100, 10000];

// const [a1, a2, a3] = arr;
// const [a1, a2, a3, a4, a5 = 100000] = arr;
console.clear();

const [first, second] = document.querySelectorAll('span');

for (const [k, v] of Object.entries(authUser)) {
  console.log(k);
  console.log(v);
}

// Object.entries.map(([k,v]) => {

// })

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// const salaries = {
//   김: 100,
//   이: 300,
//   박: 22,
//   나: 123,
// };

// const { 김, 박, 나, 이 } = salaries;

// console.log(나);

function createUserObject({ name, age, address, ...rest } = {}) {
  // const { name, age, address, phone, job } = obj;

  return {
    name,
    age,
    address,
  };
}

const data = {
  name: '심',
  age: 35,
  address: '중랑',
  phone: '010-2133-1223',
  job: '강사',
};

const user = createUserObject(data);
