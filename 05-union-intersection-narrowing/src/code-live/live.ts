// 1. 유니온 타입 '|'
// 여러 타입 중 하나

// string 또는 number 중 하나
let value: string | number;

value = "hello"; // ✅ 가능
value = 123; // ✅ 가능
// value = true; // ❌ 오류 (boolean은 안 됨)

// 2. 인터섹션 타입 '&'

type Person = { name: string };
type Worker = { company: string };

type WorkingPerson = Person & Worker;

const p: WorkingPerson = {
  name: "Alice",
  company: "OpenAI",
}; // ✅ name과 company 둘 다 있어야 함
