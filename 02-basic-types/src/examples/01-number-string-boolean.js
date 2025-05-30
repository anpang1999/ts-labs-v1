"use strict";
// number 타입
let n = 123;
n = -10.5;
n = Infinity;
n = NaN;
console.log(n.toFixed(2)); // number 전용 메서드 사용 가능
// string 타입
let s = "typescript";
s = `hello ${n}`;
console.log(s.toUpperCase()); // string 전용 메서드
// boolean 타입
let b = true;
b = false;
console.log("isActive:", b);
// 아래는 에러!
// n = "hello"; // (X)
// s = 100; // (X)
// b = "true"; // (X)
