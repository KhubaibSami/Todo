import React, { useState } from "react";
import "./App.css";
import AddTodo from "./Components/Add todo/todo.jsx";
import TodoList from "./Components/List todo/list.jsx";
import Info from "./Components/Name/name.jsx";

function App() {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };
  const handleAdd = () => {
    if (name.trim() !== "") {
      setNameSubmitted(true);
    }
  };

  const markAsDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      
        <Info handleAdd={handleAdd} name={name} setName={setName}/>
       
      {nameSubmitted && (
        <>
          <h2 className="bg-slate-900 text-cyan-200 h-16 text-3xl text-center">
            {name}'s Todo List
          </h2>

          <AddTodo addTodo={addTodo} />
          <TodoList
            todos={todos}
            markAsDone={markAsDone}
            removeTodo={removeTodo}
          />
        </>
      )}
    </>
  );
}

export default App;
