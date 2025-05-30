"use strict";
// never: 절대 반환하지 않거나, 발생할 수 없는 타입
// 1. 항상 에러를 발생시키는 함수
function fail(msg) {
    throw new Error(msg);
}
// 2. 무한루프
function endless() {
    while (true) {
        // 끝나지 않음
    }
}
// 3. 변수 선언 (절대 값을 할당할 수 없음)
let impossible;
// impossible = 1; // (x)
// impossible = undefined; // (x)
// impossible = null; // (x)
