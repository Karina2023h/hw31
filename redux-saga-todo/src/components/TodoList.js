import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearCompleted,
  loadTodos,
} from "../actions/todoActions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const text = prompt("Enter todo text:");
    if (text) {
      dispatch(addTodo(text));
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id) => {
    const text = prompt("Edit todo text:");
    if (text) {
      dispatch(editTodo(id, text));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <div className="cont">
        <button className="btn-orf" onClick={handleAdd}>
          Додати
        </button>
        <button className="btn-orfna" onClick={handleClearCompleted}>
          Очистити виконане
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button onClick={() => handleEdit(todo.id)}>Редагувати</button>
            <button className="remove" onClick={() => handleRemove(todo.id)}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
