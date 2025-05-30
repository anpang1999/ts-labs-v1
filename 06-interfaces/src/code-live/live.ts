// 인터페이스

// 1. 인터페이스 선언

// 타입 별칭
// type Usertype = {
//   id: number;
//   name: string;
//   email?: string;
// };

interface User {
  id: number;
  name: string;
  email?: string;
}

interface User {
  readonly createdAt: Date;
}

const userA: User = {
  id: 1,
  name: "윤유저",
  email: "@example.com",
  createdAt: new Date(),
};

// 2. 함수에서의 인터페이스
interface Add {
  (a: number, b: number): number;
}

// 타입 별칭
type Addtype = (a: number, b: number) => number;

// 객체 : 인터페이스, 타입 별칭
// 함수 및 기타 : 타입 별칭

// 3. 인터페이스 확장 (=상속)
interface ApiResponse {
  success: boolean;
  message?: string;
}

interface UserResponse extends ApiResponse {
  user: {
    id: string;
    name: string;
  };
}

interface ProductResponse extends ApiResponse {
  product: {
    id: string;
    name: string;
    price: number;
  };
}

let userResponse: UserResponse = {
  success: true,
  message: "message...",
  user: {
    id: "1",
    name: "윤유저",
  },
};

// 4. 인덱스 시그니처
// 키:값 구조
// 객체의 속성명이 동적으로 정해질 때 사용
