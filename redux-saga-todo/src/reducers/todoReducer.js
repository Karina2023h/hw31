import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  CLEAR_COMPLETED,
  LOAD_TODOS_SUCCESS,
} from "../actions/todoActions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    case CLEAR_COMPLETED:
      return { ...state, todos: state.todos.filter((todo) => !todo.completed) };

    case LOAD_TODOS_SUCCESS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
