"use strict";
// void: 함수가 아무것도 리턴하지 않을 때
function logMsg(msg) {
    console.log(msg);
    // return; 또는 return undefined; 암묵적으로 OK
}
// undefined: 반드시 undefined를 리턴해야 함
function getNothing() {
    // return; // 실제로는 undefined 리턴과 같음
    return undefined; // 명시적으로 undefined 반환
}
logMsg("hi!");
console.log(getNothing());
