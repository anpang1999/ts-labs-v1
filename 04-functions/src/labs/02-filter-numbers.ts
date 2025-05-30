// [문제] 조건에 따라 필터링하는 함수
// 숫자 배열과 조건 함수(predicate: number => boolean)를 받아
// 조건을 만족하는 값들만 새 배열로 반환하는 filterNumbers 함수를 작성하세요.
// predicate 함수 타입은 타입 별칭으로 선언하세요.

/*
예시)
const isEven = (n: number) => n % 2 === 0;
filterNumbers([1, 2, 3, 4], isEven) // [2, 4]
*/

// 매개타입, 리턴타입
type Predicate = (n: number) => boolean;

function filterNumbers(numbers: number[], predicate: Predicate): number[] {
  // const result: number[] = [];
  // for (const num of numbers) {
  //   if (predicate(num)) {
  //     result.push(num);
  //   }
  // }
  // return result;
  return numbers.filter(predicate);
}

const isEven = (n: number) => n % 2 === 0;
console.log(filterNumbers([1, 2, 3, 4], isEven)); // [2, 4]
