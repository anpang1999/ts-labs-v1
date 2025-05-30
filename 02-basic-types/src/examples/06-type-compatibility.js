"use strict";
// 타입 호환성: 타입 간 할당/비할당
let str2 = "abc";
let uni = str2; // string → unknown은 OK
let anyVal = str2; // string → any도 OK
// let num2: number = uni; // (x) unknown은 직접 할당 불가
// let str3: string = anyVal; // any는 할당 가능 (위험!)
