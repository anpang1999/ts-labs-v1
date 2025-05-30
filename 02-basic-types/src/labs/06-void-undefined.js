"use strict";
// [문제 6] void와 undefined 구분 실습
// (1) void와 undefined 타입의 함수 예제를 직접 만들어보세요.
function logSuccess() {
    // 성공 메시지를 콘솔에 출력
    console.log("성공했습니다!");
}
function returnUndef() {
    // undefined만 명시적으로 반환
    return undefined;
}
// (2) 두 함수의 반환값을 각각 변수에 담고 타입 추론 결과를 주석으로 써보세요.
let a = logSuccess(); // void
let b = returnUndef(); // undefined
// a, b의 타입은?
