import { useState } from "react";

export default function Form({ addToDo }) {
  const [toDoText, setToDoText] = useState("");

  const handleChange = (event) => {
    setToDoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDoText.trim() !== "") {
      addToDo(toDoText);
      setToDoText("");
    }
  };

  return (
    <form
      className="w-full p-px flex justify-center items-center rounded bg-gradient-to-r from-primary to-secondary"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full p-4 flex justify-center items-center rounded outline-none text-text text-opacity-90 bg-bg bg-opacity-90 placeholder:text-text placeholder:text-opacity-50"
        name="input"
        type="text"
        placeholder="To-Do"
        value={toDoText}
        onChange={handleChange}
      ></input>
    </form>
  );
}
