import { reactive, computed } from "vue";

export const todoState = reactive({
  todos: [],
  loadTodos: () => {
    if (localStorage.getItem("todos")) {
      todoState.todos = JSON.parse(localStorage.getItem("todos"));
    }
  },
  getLength: computed(() => {
    return todoState.todos.length;
  }),
  getCompletedTodosLength: computed(() => {
    return todoState.todos.filter((todo) => todo.completed === true).length;
  }),
  addTodo: (title) => {
    if (title) {
      todoState.todos = [
        { id: Date.now(), title: title, completed: false },
        ...todoState.todos,
      ];
      todoState.saveTodo();
    }
  },
  saveTodo: () => {
    localStorage.setItem("todos", JSON.stringify(todoState.todos));
  },
  completeTodo: (id) => {
    todoState.todos = todoState.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    todoState.saveTodo();
  },
  deleteTodo: (id) => {
    todoState.todos = todoState.todos.filter((todo) => todo.id != id);
    todoState.saveTodo();
  },
});
