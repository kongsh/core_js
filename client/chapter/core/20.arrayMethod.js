/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 1,
    name: '이성우',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 2,
    name: '윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 3,
    name: '김미리',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

function user(user) {
  // console.log(user.job);
}

people.forEach(user);

// 이벤트 처리할 때 부모에만 걸어주는 delegation, 위임 방식 사용

const span = document.querySelectorAll('span');

span.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    this.style.color = 'orange';
    console.log(index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverse = people.toReversed();

console.log(reverse);

// splice

const splice = people.toSpliced(2, 1, { name: 'qwer' });

// sort

const arr = [5, 4, 7, 6, 3, 1];

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const sort = arr.toSorted(compare);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const map = people.map((user) => user.job);

const ages = people.map((user) => user.age + 2);

const cardTag = people.map((user) => {
  const template = /* html */ `
    <li class="userCard">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li> <span class="strong">이름</span> : ${user.name}</li>
        <li> <span class="strong">나이</span> : ${user.age}</li>
        <li> <span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `;

  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const az = people.find((user) => {
  return user.age > 20;
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const mz = people.filter((user) => {
  return user.age > 20;
});

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const ageSum = people.reduce((acc, cur) => {
  return (acc += cur.age);
}, 0);

const tags = people.reduce((acc, user) => {
  const template = /* html */ `
    <li class="userCard">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li> <span class="strong">이름</span> : ${user.name}</li>
        <li> <span class="strong">나이</span> : ${user.age}</li>
        <li> <span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `;
  return [...acc, template];
}, []);
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const _arr = 'k/j/s/y';

const stringToArray = _arr.split('/');
const arrayToString = stringToArray.join('/');

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const _forEach = (f, i) => {
  for (const a of i) f(a);
};

// forEach((item) => {
//   console.log(item);
// }, products);

const _map = (f, i) => {
  const arr = [];

  for (const a of i) arr.push(f(a));

  return arr;
};

// const newMap = _map((item) => item.price, products);

const _filter = (f, i) => {
  const arr = [];

  for (const a of i) {
    if (f(a)) arr.push(a);
  }

  return arr;
};

// const product = _filter((item) => item.price < 15000, products);

const _reduce = (f, acc, i) => {
  if (!i) {
    // i = acc;
    // acc = i.shift();

    i = acc[Symbol.iterator]();
    acc = i.next().value;
  }

  for (const a of i) acc = f(acc, a);

  return acc;
};

const t = _reduce((acc, cur) => acc + cur.price, products);
