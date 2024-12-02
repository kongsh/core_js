/* void type */

function sayHi(): string {
  return "hello";
}

sayHi();

function printHi(): void {
  console.log("hello");
}

printHi();

/* never type */

// 존재하지않는, 불가능한, 어떤 값도 정의할 수 없는 타입

function showError(message: string): never {
  // return으로 void도 안내보내는 경우(에러가 많음), never를 선언
  throw new Error(message);
}

showError("error!");

// function loop(): never {
//   while(true){
//     ...
//   }
// }

function* gen(): Generator<number, void, void> {
  let count = 0;
  while (true) {
    yield ++count;
  }
}

/*
  Generator<T,R,P>
  T: yield의 반환타입
  R: 함수의 반환값 타입
  P: next()메서드에서 전달되는 값의 타입
*/
