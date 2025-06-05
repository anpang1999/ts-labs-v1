const dateTitle = document.getElementById("date-title") as HTMLDivElement;
const addForm = document.getElementById("add-form") as HTMLFormElement;
const addInput = document.getElementById("add-input") as HTMLInputElement;
const taskCount = document.getElementById("task-count") as HTMLDivElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

// 1단계: 날짜 표시 기능

function renderDate() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  });
  dateTitle.textContent = dateStr;
}

renderDate();

// 2단계: 할 일 데이터 구조와 초기화
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

// 3단계: 할 일 추가 기능
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = addInput.value.trim();
  if (!content) return;

  const newTodo: Todo = {
    id: Date.now(),
    content,
    completed: false,
  };
  todos.unshift(newTodo);
  addInput.value = "";
  renderTodos();
});

// 4단계: 할 일 렌더링 기능

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (todo.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const title = document.createElement("span");
    title.className = "todo-title";
    title.textContent = todo.content;

    const editBtn = document.createElement("button");
    editBtn.className = "icon-btn";
    editBtn.innerHTML = "✏️";
    editBtn.addEventListener("click", () => editTodo(todo.id, title));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn";
    deleteBtn.innerHTML = "❌";
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.append(checkbox, title, editBtn, deleteBtn);
    todoList.appendChild(li);
  });

  renderTaskCount();
}

// 5단계: 할 일 완료 토글
function toggleTodo(id: number) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

// 6단계: 할 일 삭제
function deleteTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

// 7단계: 할 일 수정
function editTodo(id: number, titleElem: HTMLSpanElement) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = titleElem.textContent || "";
  input.className = "edit-input";

  titleElem.replaceWith(input);
  input.focus();

  const cancel = () => input.replaceWith(titleElem);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newVal = input.value.trim();
      if (newVal) {
        todos = todos.map((todo) =>
          todo.id === id ? { ...todo, content: newVal } : todo
        );
        renderTodos();
      } else cancel();
    } else if (e.key === "Escape") {
      cancel();
    }
  });

  input.addEventListener("blur", cancel);
}

//  8단계: 남은 할 일 개수 표시
function renderTaskCount() {
  const remaining = todos.filter((t) => !t.completed).length;
  taskCount.textContent = `${remaining} tasks left`;
}
renderDate();
renderTodos();
