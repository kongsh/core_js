import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

// 인풋 이벤트 바인딩, 타이핑 될 때마다 값을 localstorage에 저장
// init 함수안에서 localstorage의 값을 가져와 input의 value로 설정(새로고침 해도 data 유지)
const textArea = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

function init() {
  getStorage('text').then((res) => (textArea.value = res));
}

function handleTextArea() {
  setStorage('text', this.value);
}

function handleClear() {
  textArea.value = '';
  deleteStorage('text');
}

init();
textArea.addEventListener('input', handleTextArea);
clearButton.addEventListener('click', handleClear);
