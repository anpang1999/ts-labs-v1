"use strict";
// any 타입: 뭐든 담을 수 있음 (타입스크립트 OFF)
let crazy = 1;
crazy = "hello";
crazy = { x: 1 };
console.log(crazy.noSuchMethod()); // 런타임 에러 발생 가능
// unknown 타입: 뭐든 담을 수 있지만 바로 사용 불가
let safe = 1;
safe = "hello";
safe = { x: 1 };
// safe.noSuchMethod(); // ❌ 컴파일 에러
// 타입 가드 필요
if (typeof safe === "string") {
    console.log(safe.toUpperCase()); // OK
}
