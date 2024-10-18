"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  //<> called generic type
  const [input, setInput] = useState<string>("");

  // GET Data
  async function getData() {
    const res = await fetch("/api/crud");
    const data = await res.json();
    console.log(data);
    setTodos(data);
  }

  // POST Data
  async function handleAdd() {
    const res = await fetch("/api/crud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: input,
      }),
    });
    const data = await res.json();
    console.log(data);
    getData();
  }

  // Delete data
  async function handleDelete(id: number) {
    const res = await fetch(`/api/crud`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await res.json();
    console.log(data);
    getData();
  }

  // Update data
  async function handleUpdate(id: number, title: string, completed: boolean) {
    const res = await fetch(`/api/crud`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
        completed: !completed,
      }),
    });
    const data = await res.json();
    console.log(data);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
  // getData();
  return (
    <div className="bg-gray-300 h-screen w-full">
      <div className="flex justify-center items-center h-full flex-col ">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <div className="flex gap-3">
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="p-1 bg-blue-700 text-white rounded-md"
          >
            Add
          </button>
        </div>
        <br />

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Todo List</h2>
          <ul>
            {/* <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li> */}
            {todos.map((todo: Todo) => (
              <li className="flex justify-between items-center" key={todo.id}>
                {todo.title}
                <input type="checkbox" checked={todo.completed} onChange={()=>handleUpdate(todo.id,todo.title,todo.completed)}/>
                <MdDelete
                  className="text-red-700 cursor-pointer"
                  onClick={() => handleDelete(todo.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
