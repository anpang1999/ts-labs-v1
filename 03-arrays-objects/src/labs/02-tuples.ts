/**
 * [문제] 학생의 시험 점수를 튜플로 표현하세요.
 * 1. "이름"과 "점수"로 이루어진 튜플 StudentScore를 선언
 * 2. 예시 데이터 3개를 만들어 scores 배열에 담으세요
 * 3. 70점 이상인 학생 이름만 추출해서 passed에 저장하세요
 */

// TODO: StudentScore 타입 선언, scores 배열 생성, passed 계산

type StudentScore = [string, number];

let scores: StudentScore[] = [
  ["eunji", 85],
  ["minsu", 67],
  ["sora", 92],
];

const passed = scores;
