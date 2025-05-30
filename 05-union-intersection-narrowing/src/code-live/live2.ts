// 타입 좁히기 (Type Narrowing)
// 패턴

// (1) typeof

function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // string으로 좁혀짐
  } else {
    console.log(val.toFixed()); // number로 좁혀짐
  }
}
// (2) null checks

function greet(name?: string) {
  if (name) {
    console.log("안녕하세요,", name.toUpperCase());
  } else {
    console.log("이름이 없습니다.");
  }
}

type User = { id: number; name: string; email?: string };

// 선택적 매개변수
// api -> user(x)
function printUserProfile(user?: User) {
  if (!user) {
    return;
  }
  if (user.email) {
    console.log(`ID: ${user.id}, 이름: ${user.name}, 이메일: ${user.email}`);
  } else {
    console.log(`ID: ${user.id}, 이름: ${user.name}`);
  }
}

printUserProfile({ id: 1, name: "윤유저" });

// (3) in 연산자

type SuccessResponse = { data: string };
type ErrorResponse = { error: string };
type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  if ("data" in response) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}
// (4) discriminated union (=tagged union)

type Square = { kind: "square"; size: number };
type Circle = { kind: "circle"; radius: number };

function getArea(shape: Square | Circle): number {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}

// type SuccessResponse = { ok: true; data: string };
// type ErrorResponse = { ok: false; error: string };
// type ApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(response: ApiResponse) {
//   if (response.ok) {
//     console.log(response.data);
//   } else {
//     console.log(response.error);
//   }
// }

// (5) 타입 가드 함수

type Guest = { kind: "guest"; visitReason: string };
type Member = { kind: "member"; memberId: string };
type Person = Guest | Member;

function isMember(person: Person): person is Member {
  return person.kind === "member";
}

// 특수 문법 : is
function printPersonInfo(person: Person) {
  if (isMember(person)) {
    // 회원
    console.log(`회원 ID: ${person.memberId}`);
  } else {
    // 손님
    console.log(`방문 이유: ${person.visitReason}`);
  }
}

const a: Person = { kind: "guest", visitReason: "상담" };
const b: Person = { kind: "member", memberId: "abc123" };

printPersonInfo(a); // 방문 이유: 상담
printPersonInfo(b); // 회원 ID: abc123

// (6) instanceof
