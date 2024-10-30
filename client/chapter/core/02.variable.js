/* ------------------ */
/* Variables          */
/* ------------------ */

/*console.log('variable');

let admin, name;

name = 'John';

admin = name;

alert(admin);*/

/*let planetName;

let currentUserName;*/

let a = 12;

for (let i = 0; i < 3; i++) {
  let a = 13;
  console.log(a);
  console.log(a);
}

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기

/* variables ----------------------------------------------------------- */

/*const PRODUCT1_PRICE = 100;
const PRODUCT2_PRICE = 200;
const PRODUCT3_PRICE = 300;

let product1Number, product2Number, product3Number;
let sumOfProduct1Price = product1Number*PRODUCT1_PRICE, sumOfProduct2Price = product2Number*PRODUCT2_PRICE, sumOfProduct3Price = product3Number*PRODUCT3_PRICE;*/
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
// let sumOfProductsPrice = sumOfProduct1Price + sumOfProduct2Price + sumOfProduct3Price;
let totalProductPrice;

// - 구매 결제 여부
// let PurchaseStatus = false;
let isPayment = true;
let hasCartItem = false;

// - 구매 결제 내역
// let PurchaseHistory;
let paymentList;

// - 오늘의 운세
// let todayHoroscope
let fortuneToday = 'good';

/* constant variables -------------------------------------------------- */

// - 1년 기준 일(day)자 수
// const ONE_YEAR_DAY = 365;
const DAY_PER_YEAR = 365;

// - 브랜드 접두사
// const BRAND_PREFIX = 'likelion';
const BRAND_PREFIX = 'Stussy';

// - 상품 정보
const product = {
  productA: {
    name: '',
    price: '',
    info: '',
  },
};
