/* ------------------- */
/* Strict Mode         */
/* ------------------- */

'use strict';

// 엄격 모드를 사용한 코드와 그렇지 않은 코드를 비교해봅니다.

// #1
const JUJEOB =
  '심선범 넌 뭐랄까.. 마치 베를린 같아. 왜냐하면 치명적인 독일 수도.';
console.log(JUJEOB);

// #2
console.log(this);
// use strict 모드에서는(모던 JS) this를 전역객체로 찾는게 불가능
// 하지만 모듈 프로그래밍이 아닌 이상 언어적 차원에서 window를 보여주는 형태
