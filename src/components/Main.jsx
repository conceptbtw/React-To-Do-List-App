import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import ToDoList from "./ToDoList";

export default function Main() {
  const [toDoItems, setToDoItems] = useState([]);

  const addToDo = (toDoText) => {
    const newToDo = {
      id: uuidv4(),
      text: toDoText,
      completed: false,
    };
    setToDoItems([...toDoItems, newToDo]);
  };

  const checkToDo = (id) => {
    setToDoItems(
      toDoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteToDo = (id) => {
    setToDoItems(toDoItems.filter((item) => item.id !== id));
  };

  return (
    <main className="max-w-xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-4">
      <Form addToDo={addToDo} />
      <ToDoList
        toDoItems={toDoItems}
        checkToDo={checkToDo}
        deleteToDo={deleteToDo}
      />
    </main>
  );
}
