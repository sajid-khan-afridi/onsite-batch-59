"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const Page = () => {
  // giving the type to todos

  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  //GET
  async function getTodos() {
    const res = await fetch("/api/crud");
    const data = await res.json();
    setTodos(data);
  }

  //POST
  async function handleAdd() {
    const post = await fetch("/api/crud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: input,
        completed: false,
      }),
    });
    const data = await post.json();
    // setTodos([...todos, data]);
    getTodos();
    console.log(data);
    console.log("Add Todo");
  }

  //DELETE
  async function handleDelete(id: number) {
    // const del = await fetch(`/api/crud/${id}`, {
    const del = await fetch(`/api/crud`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await del.json();
    getTodos();
    console.log(data);
    console.log("Delete Todo");
  }

  //put for checkbox
  async function handleCheckbox(id: number, title: string, completed: boolean) {
    const patch = await fetch(`/api/crud`, {
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
    const data = await patch.json();
    getTodos();
    console.log(data);
    console.log("Patch Todo");
  }

  useEffect(() => {
    getTodos();
  }, []);
  //   getTodos();
  return (
    <div className="h-screen w-full bg-gray-400 p-5">
      {/* making the content of the page to be centered */}
      <div className="flex justify-center items-center h-full flex-col">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Add Todo"
            className="border-2 border-gray-300 rounded-md p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Add Todo
          </button>
        </div>
        <br />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Todo List</h2>
          <ul>
            {/* <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li> */}
            {/* map through the todos and display them */}
            {todos.map((todo: Todo) => (
              <li
                className="grid grid-cols-[1fr,auto,auto,auto] gap-x-4"
                key={todo.id}
              >
                {todo.title}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={() =>
                    handleCheckbox(todo.id, todo.title, todo.completed)
                  }
                />
                <MdDelete
                  className="cursor-pointer text-red-800"
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
