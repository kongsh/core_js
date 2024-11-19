// import { getNode, getNodes } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import clearContents from './lib/dom/clearContents.js';

import { getNode, getNodes, insertLast, clearContents } from './lib/index.js';

// const first = getNode('#firstNumber');
// const second = getNode('#secondNumber');
// const button = getNode('#clear');
// const result = getNode('.result');

// /* global clearContents */

// function handleSum(e) {
//   e.preventDefault();

//   const total = +first.value + +second.value;

//   clearContents(result);
//   insertLast(result, total);

//   clearContents(first);
//   clearContents(second);
// }

// button.addEventListener('click', handleSum);

// 1. input 선택하기
// 2. input 이벤트 바인딩
// 3. input의 value 값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

function handleInput() {
  const firstValue = Number(first.value);
  const secondValue = +second.value;
  const total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
