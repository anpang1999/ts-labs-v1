// 제네릭
// 타입을 나중에(사용 지점에) 결정하는 문법
// 코드 재사용성 + 타입 안정성

// any와 unknown 은 타입 안정성 위험
function echo(value: any) {
  return value;
}

console.log(echo(2));

//
type FirstElement<T> = (arr: T[]) => T;

const getFirst: FirstElement<string> = (arr) => arr[0];
getFirst(["윤유저", "김유저"]);

const getFirstUser: FirstElement<string> = (arr) => arr[0];

// 1. any로
// 2. 일일이 선언 (함수 오버로딩)

// 인터페이스에서 제네릭 사용

interface ApiResponse<T> {
  success: boolean;
  data: { id: number; name: string };
}
// userResponse
// productResponse
// errResponse

// 제네릭 타입 제약

// number, boolean, string, arrays

function printLength<T extends { length: number }>(val: T): void {
  console.log(val.length);
}

printLength("123");
