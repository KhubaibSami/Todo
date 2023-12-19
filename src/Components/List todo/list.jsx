import React from "react";

const TodoList = ({ todos, markAsDone, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button  className='ml-4 px-5 py-2 bg-slate-900 rounded text-cyan-200' onClick={() => markAsDone(index)}>
              {todo.done ? "Undo" : "Done"}
            </button>
            <button  className='ml-4 px-5 py-2 bg-slate-900 rounded text-cyan-200' onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
