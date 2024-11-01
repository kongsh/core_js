/* ---------------- */
/* Condition        */
/* ---------------- */

// const nameOfJs = prompt("자바스크립트의 '공식'이름은 무엇일까요?", '');

// if (nameOfJs === 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// const inputNumber = prompt('정수를 입력해 주세요', '');

// if (inputNumber > 0) {
//   console.log(1);
// } else if (inputNumber < 0) {
//   console.log(-1);
// } else if (inputNumber == 0) {
//   console.log(0);
// }

// let result = a + b < 4 ? '미만' : '이상';

// let message =
//   (login == '직원')
//     ? '안녕하세요.'
//     : (login == '임원')
//       ? '환영합니다.'
//       : (login == '')
//         ? '로그인이 필요합니다.'
//         : '';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie;

// 영화 볼거니?
// let goingToWatchMovie;

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

// let didwatchMovie = confirm('영화 봤어?');
// let goingToWatchMovie = confirm('영화 볼거야?');

// didwatchMovie
//   ? console.log('watched movie')
//   : goingToWatchMovie
//     ? console.log('will watch movie')
//     : console.log('hate movie');

function watchingMovie() {
  let didwatchMovie = confirm('영화 봤어?');
  let goingToWatchMovie = confirm('영화 볼거야?');

  if (didwatchMovie) {
    console.log('watched movie');
  } else if (goingToWatchMovie) {
    console.log('will watch movie');
  } else {
    console.log('hate movie');
  }
}
