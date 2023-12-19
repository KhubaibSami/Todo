import React from "react";

const Info = ({  handleAdd , name, setName}) => {

  return (
    <>
      <div>
        <h1 className="text-3xl">Enter your Name</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className="my-7 border-solid border-2 border-black-500 rounded"
        />
        <button
          onClick={handleAdd}
          className="ml-4 px-5 py-2 bg-slate-900 rounded text-cyan-200"
        >
          Create Todo
        </button>
      </div>
    </>
  );
};

export default Info;
