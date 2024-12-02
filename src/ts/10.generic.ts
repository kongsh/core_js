/* generic type */
// 타입을 변수로 받는 것

function sumFunc<T>(value: T): T {
  return value;
}

const a = sumFunc(10);
const b = sumFunc("hello");
const c = sumFunc(false);

function swapAtoB<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

swapAtoB(1, true);

function getLength<T extends { length: number }>(data: T): number {
  return data.length;
}

const b1 = getLength([1, 2, 3]);
const c1 = getLength("hi");
const d1 = getLength({ name: "dwq", length: 1 });
