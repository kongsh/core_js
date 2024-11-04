/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i++);
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let i = +prompt('순환 횟수', 0);
// let b = i + 1;

// do {
//   if (i <= 0) {
//     console.log(
//       '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//     );
//     break;
//   }
//   console.log(b - i--);
// } while (i >= 0);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== 1);

let first = document.querySelector('.first');

console.log(next('.first'));
console.log(next(first));
console.log(first);

function next(currentLocation) {
  if (typeof currentLocation === 'string')
    currentLocation = document.querySelector(currentLocation);

  do {
    currentLocation = currentLocation.nextSibling;
  } while (currentLocation.nodeType !== 1);

  return currentLocation;
}

console.log(prev('.second'));

function prev(currentLocation) {
  if (typeof currentLocation === 'string')
    currentLocation = document.querySelector(currentLocation);

  do {
    currentLocation = currentLocation.previousSibling;
  } while (currentLocation.nodeType !== 1);

  return currentLocation;
}
