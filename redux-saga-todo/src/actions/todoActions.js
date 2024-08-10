export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const LOAD_TODOS = "LOAD_TODOS";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});
export const loadTodos = () => ({ type: LOAD_TODOS });
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: todos,
});
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
