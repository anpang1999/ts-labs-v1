// [문제 4] 타입 추론 연습
// (1) 변수 선언 시 타입 표기 없이 값을 대입해서 타입이 어떻게 추론되는지 직접 확인하세요.

let city = "Seoul";
let year = 2024;
let isHoliday = false;
let luckyNumbers = [7, 13, 21]; // 배열의 타입 추론도 확인해보세요
let scores = [100, "A", true]; // 여러 타입이 섞인 배열 추론 결과는?

// city = 123;
// year = "올해";
// isHoliday = 0;

// (2) const와 let의 타입 추론 차이도 확인해보세요.
const pi = 3.14; // pi 타입은? //3.14 -> 리터럴
let e = 2.71; // e 타입은?
