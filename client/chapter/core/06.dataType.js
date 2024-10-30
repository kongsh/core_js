/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let txt = 'smalltext';
console.log(typeof txt);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 1.34;
console.log(typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let biginteger = 123n;
console.log(typeof biginteger);

// 6. 참(true, yes) 또는 거짓(false, no)
let boolvalue = true;
console.log(typeof boolvalue);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let entity = {
  name: 'tiger',
  age: 253,
};
console.log(typeof entity);

// 8. 고유한 식별자(unique identifier)
let sym1 = Symbol('syms');
console.log(typeof sym1);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
typeof entity;
// 2) 함수 typeof()
typeof (number + txt);

// 언어 상, 오류
console.log(typeof null);

// Object

// Array
console.log(typeof entity);

// function
console.log(typeof alert);

// this
