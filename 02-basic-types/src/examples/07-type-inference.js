"use strict";
// 1. 변수 선언과 동시에 값 대입 (타입 추론)
let num = 10; // number로 추론
let str = "hello"; // string으로 추론
let flag = true; // boolean으로 추론
let empty = undefined; // undefined로 추론
let nothing = null; // null로 추론
// num = "hi";         // (x) 에러! string 할당 불가
// str = 123;          // (x) 에러! number 할당 불가
// 2. const의 리터럴 타입 추론
const greeting = "hi"; // 타입: "hi"
const max = 100; // 타입: 100
// greeting = "hello";  // (x) 에러! (const + 리터럴 타입)
// 3. 구조 분해 할당 추론
const user = { name: "Alice", age: 20 };
const { name, age } = user; // name: string, age: number
const arr = [1, "two", false];
const [first, second, third] = arr; // first: 1, second: "two", third: false
// 4. 함수의 리턴값 타입 추론
function getNumber() {
    return 42; // number로 추론
}
function getText() {
    return "TS"; // string으로 추론
}
function log() {
    console.log("로그!"); // void로 추론
}
let a = getNumber(); // a: number
let b = getText(); // b: string
// 5. 기본값이 있는 함수 매개변수 추론
function add(a = 0, b = 0) {
    return a + b; // number로 추론
}
const sum = add(3, 7);
// 6. 타입 명시 없는 변수 → any (비권장)
let x; // any
x = 1;
x = "hello";
x = true;
// x.toFixed();   // 런타임 OK, any라서 다 허용
// x.toUpperCase(); // any라서 에러 없음 (타입스크립트의 보호 기능 OFF)
// 7. 타입 추론 + 에러 확인
let inferString = "typescript";
// inferString = 123; // ❌ 에러: number 할당 불가
