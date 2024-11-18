/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('hi');
}

// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');
const home = getNode('.home');

// about.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

// about.addEventListener('click', handler);

// home.addEventListener('click', () => {
//   about.removeEventListener('click', handler);
// });

// function bindEvent(node, type, handler) {
//   if (isString(node)) node = getNode(node);
//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);
// }

// const remove = bindEvent(about, 'click', handler);

// about.

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({ offsetX: x, offsetY: y }) {
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;
  // console.log(w);

  // console.log(x, y);

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

ground.addEventListener('click', handleBall);

function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;

  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px">🥕</div>
  `;
  insertLast(ground, template);
}

// ground.addEventListener('mousemove', handleMove);

const input = getNode('input');

function handleInput() {
  if (this.value === '키워드') {
    console.log('통과');
  }

  // console.log(this.value);
}

input.addEventListener('input', handleInput);

// debounce

ground.addEventListener('mousemove', debounce(handleMove, 100));

function debounce(callback, limit = 500) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

// throttle
ground.addEventListener('mousemove', throttle(handle, 100));

function throttle(callback, limit = 500) {
  let wait = false;

  return function () {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}
