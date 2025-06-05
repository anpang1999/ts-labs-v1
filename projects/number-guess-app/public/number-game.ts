// TypeScript 기본 변수 설정
const input = document.getElementById("guess-input") as HTMLInputElement;
const form = document.getElementById("guess-form") as HTMLFormElement;
const resultMsg = document.getElementById("result-msg") as HTMLDivElement;
const trialCount = document.getElementById("trial-count") as HTMLSpanElement;
const historyList = document.getElementById("history-list") as HTMLUListElement;
const resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;

let answer: number;
let tries: number;

// 게임 초기화 함수 구현

// - 정답 숫자 생성 (1~100)
// - 시도 횟수, 메시지, 기록 초기화

function initGame(): void {
  answer = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  resultMsg.textContent = "";
  trialCount.textContent = "시도: 0회";
  historyList.innerHTML = "";
  resetBtn.style.display = "none";
  input.disabled = false;
  input.value = "";
  input.focus();
}

// 추측 처리 함수 구현

// - 숫자 입력 검증 (1~100)
// - 정답 비교 → Up/Down/정답 메시지 출력
// - 시도 횟수 증가
// - 시도 내역 기록 추가

function handleGuess(userInput: number): void {
  if (userInput < 1 || userInput > 100) {
    resultMsg.textContent = "1~100 사이의 숫자를 입력하세요";
    return;
  }

  tries++;
  trialCount.textContent = `시도: ${tries}회`;

  let hint: string;
  if (userInput < answer) {
    hint = "Up!";
  } else if (userInput > answer) {
    hint = "Down!";
  } else {
    hint = `정답입니다! 시도 횟수: ${tries}회`;
    input.disabled = true;
    resetBtn.style.display = "inline-block";
  }

  resultMsg.textContent = hint;

  const li = document.createElement("li");
  li.textContent = `${userInput} → ${hint}`;
  historyList.prepend(li);
}

// 이벤트 연결
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const guess = parseInt(input.value, 10);
  if (!isNaN(guess)) {
    handleGuess(guess);
  }
  input.value = "";
  input.focus();
});

resetBtn.addEventListener("click", () => {
  initGame();
});

// 게임 시작 시 초기화 호출
initGame();
