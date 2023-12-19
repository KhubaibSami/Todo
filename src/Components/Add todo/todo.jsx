import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"
        className='my-7 border-solid border-2 border-black-500 rounded'       
      />
      <button onClick={handleAddTodo}  className='ml-4 px-5 py-2 bg-slate-900 rounded text-cyan-200'>Add Todo</button>
    </div>
  );
};

export default AddTodo;
