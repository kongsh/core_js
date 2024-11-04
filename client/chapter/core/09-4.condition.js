/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

// condition ? value1 : value2

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
receivedEmailAddress = emailAddress ?? 'user@company.id';
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log(0 || WIDTH);
console.log(0 ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(isActive || WIDTH);
console.log(isActive ?? WIDTH);

console.clear();

function discountPrice(userState, count, price) {
  if (!(typeof userState === 'string')) {
    throw new Error('첫번째 인자에 문자열을 입력해주세요');
  }
  if (!(typeof count === 'number')) {
    throw new Error('두번째 인자에 숫자를 입력해주세요');
  }
  if (!(typeof price === 'number')) {
    throw new Error('세번째 인자에 숫자를 입력해주세요');
  }

  if (!['프리미엄 회원', '일반 회원', '비회원'].includes(userState)) {
    throw new Error('범위에 포함되지 않은 수가 입력되었습니다');
  }

  if (count <= 0 || price < 0) {
    throw new Error('범위에 포함되지 않은 수가 입력되었습니다');
  }

  let discountRate = 1;

  if (count === 1) {
    discountRate -= 0.05;
  }

  if (userState === '프리미엄 회원') {
    discountRate -= 0.2;
  } else if (userState === '일반 회원' && count > 1) {
    discountRate -= 0.1;
  }

  if (price >= 20000) {
    discountRate -= 0.05;
  }

  return price * discountRate;
}

console.log(discountPrice('프리미엄 회원', 1, 23500));

discountPrice('프리미엄 회원', 1, 23500);
