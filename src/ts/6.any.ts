let an: any;

an = 1;
an.toFixed();
an = "qwe";
an = null;

let arr: unknown;

arr = 1.61651;
arr = "hello";

if (typeof arr === "number") arr.toFixed();
