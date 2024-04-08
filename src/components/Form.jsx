import { useState } from "react";

export default function Form() {
  const [toDoText, setToDoText] = useState("");

  const handleChange = (event) => {
    setToDoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDoText.trim() !== "") {
      setToDoText("");
    }
  };

  return (
    <form
      className="w-full flex justify-between items-center border rounded overflow-hidden"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full p-4 flex justify-between items-center"
        name="input"
        type="text"
        value={toDoText}
        onChange={handleChange}
      ></input>
    </form>
  );
}
