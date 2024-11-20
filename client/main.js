import {
  memo,
  attr,
  getNode,
  getNodes,
  endScroll,
  insertLast,
  clearContents,
  diceAnimation,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

let count = 0;
let total = 0;

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

// const handleRecord = (() => {
//   let isClicked = false;

//   return () => {
//     if (!isClicked) {
//       recordListWrapper.hidden = false;
//     } else {
//       recordListWrapper.hidden = true;
//     }
//     isClicked = !isClicked;
//   };
// })();

function createItem(value) {
  return `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
}

function renderRecordItem() {
  const diceNumber = +memo('cube').getAttribute('dice');

  insertLast('tbody', createItem(diceNumber));
}

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();

  endScroll(recordListWrapper);
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
