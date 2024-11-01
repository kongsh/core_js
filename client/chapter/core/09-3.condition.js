/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = prompt('number', '');

// switch (a) {
//   case '10':
//   case '13':
//   case '15':
//   case '20':
//     console.log(a);
//     break;
//   default:
//     console.log('wrong value');
// }

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}
// switch (thisTime) {
//   case MORNING:
//     console.log('뉴스 기사 글을 읽는다.');
//     break;
//   case LUNCH:
//     console.log('자주 가는 식당에 가서 식사를 한다.');
//     break;
//   case DINNER:
//     console.log('동네 한바퀴를 조깅한다.');
//     break;
//   case NIGHT:
//     console.log('친구에게 전화를 걸어 수다를 떤다.');
//     break;
//   case LATE_NIGHT:
//   case DAWN:
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
// }

/* switch vs. if -------------------------------------------------------- */

console.clear();

// let number = +prompt('숫자를 입력해주세요', 0);

// switch (number) {
//   case 0:
//     console.log('일');
//     break;
//   case 1:
//     console.log('월');
//     break;
//   case 2:
//     console.log('화');
//     break;
//   case 3:
//     console.log('수');
//     break;
//   case 4:
//     console.log('목');
//     break;
//   case 5:
//     console.log('금');
//     break;
//   case 6:
//     console.log('토');
//     break;
//   default:
//     console.log('잘못된 입력입니다.');
// }

// 함수는 하나의 기능만을 수행하는 것(클린코드)
// 함수는 재사용성을 고려해야 함. (유연한 함수)
// separation of concerns (관심사의 분리)

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

const value = getRandom(7);

function getDay(num) {
  switch (num) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

function weekend() {
  const today = getDay(getRandom(7));

  // switch (today) {
  //   case '일':
  //   case '토':
  //     return `오늘은 ${today}요일 입니다. 그러므로 주말입니다`;
  //   default:
  //     return `오늘은 ${today}요일 입니다. 그러므로 평일입니다`;
  // }

  return today.includes('토') || today.includes('일')
    ? `오늘은 ${today}요일 입니다. 그러므로 주말입니다`
    : `오늘은 ${today}요일 입니다. 그러므로 평일입니다`;
}

const day = weekend();
console.log(day);
