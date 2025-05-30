// 함수 선언
// (1) 함수 선언식
// (2) 함수 표현식, 변수 = 함수(값)
// (3) 화살표 함수

function add(a: number, b: number) {
  return a + b;
}

const sub = function (a: number, b: number): number {
  return a - b;
};

const multiply = (a: number, b: number): number => a * b;

// 선택적 매개변수

function log(msg: string, userName?: string): void {
  if (userName) {
    console.log(`${userName} : ${msg}`);
  } else {
    console.log(`${msg}`);
  }
}

// 나머지 매개변수 ...

function sumAll(...nums: number[]) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

sumAll(1, 2);

// 함수 = 값

// 직접 함수를 선언하는 방식
// 타입 별칭, 인터페이스

// 타입 별칭 선언
type OP = (a: number, b: number) => number; // 타입 지정

// 함수 선언
function compute(a: number, b: number, op: OP) {
  return op(a, b);
}

compute(1, 2, (a, b) => a + b);

// 함수 오버로딩
// 시그니처가 달라
// (매개변수...)
