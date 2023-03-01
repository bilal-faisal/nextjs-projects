"use client";
import { useState } from "react";

const Home = () => {
  const [todos, settodos] = useState([
    { text: "Todo1", completed: false },
    { text: "Todo2", completed: true },
    { text: "Todo3", completed: false },
  ]);
  let [todo, settodo] = useState("");

  function addTodoFunc(e: any) {
    todo = todo.trim();
    settodo(todo);
    if (todo == "") {
      return;
    }

    let can = true;
    {
      for (const key in todos) {
        if (todo == todos[key].text) {
          can = false;
        }
      }
    }

    if (can) {
      let newTodo = {
        text: `${todo}`,
        completed: false,
      };
      settodos([...todos, newTodo]);
      settodo("");
    } else {
      alert("Task already exists");
    }
  }

  function deleteTodoFunc(e: any) {
    let newTodos = todos.filter((elem) => {
      if (e.target.name == elem.text) {
        return false;
      } else {
        return true;
      }
    });
    settodos(newTodos);
  }

  function inputHandleFunc(e: any) {
    settodo(e.target.value);
  }
  function checkBoxFunc(e: any) {
    let data = todos.map((elem) => {
      if (e.target.name == elem.text) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    settodos(data);
  }
  return (
    <>
      <h1 className="p-3 text-2xl font-bold">Todo App</h1>

      <span className="ml-4 my-2">Add Todo:</span>
      <input
        type="text"
        className="ml-2 border border-black pl-1"
        value={todo}
        onChange={inputHandleFunc}
        autoFocus
      />
      <button className="ml-4 px-3 border border-black" onClick={addTodoFunc}>
        Add
      </button>

      <p className="pl-4 text-xl my-2">Todos:</p>
      <ul className="ml-6">
        {todos.map((elem) => {
          return (
            <li key={elem.text}>
              <input
                type="checkbox"
                name={elem.text}
                checked={elem.completed}
                onChange={checkBoxFunc}
                className="hover:cursor-pointer"
              />
              <span
                className={
                  elem.completed === true
                    ? "text-green-500 pl-3 text-lg"
                    : "text-red-500 pl-3 text-lg"
                }
              >
                {elem.text}
              </span>

              <button
                className="ml-3 underline"
                onClick={deleteTodoFunc}
                name={elem.text}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;