/* Array Type */

let arr: number[] = [1, 2, 3];

let str: string[] = ["a", "b", "c"];

/* generic type 타입 변수 => 함수 */

let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ["a", "b", "c"];

// union type
let multi: (string | number | boolean)[] = ["hello", 10, false];

/* Tuple type */

let tupleA: [number, number] = [1, 2];

const user: [string, number][] = [
  ["김긱김", 30],
  ["최긱김", 3],
  ["박긱김", 64],
];
