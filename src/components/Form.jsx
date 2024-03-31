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
    <form className="" onSubmit={handleSubmit}>
      <input
        className=""
        name="input"
        type="text"
        value={toDoText}
        onChange={handleChange}
      ></input>
    </form>
  );
}
