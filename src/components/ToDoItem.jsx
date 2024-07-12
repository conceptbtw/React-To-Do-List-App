import { useState } from "react";

export default function ToDoItem({ item, checkToDo, deleteToDo, editToDo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newToDoText, setNewToDoText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editToDo(item.id, newToDoText);
    setIsEditing(false);
  };

  return (
    <li
      className={`w-full p-px rounded bg-gradient-to-r from-primary to-secondary ${
        item.completed ? "opacity-50" : ""
      }`}
    >
      <div className="w-full p-4 flex justify-around items-center gap-2 rounded bg-bg bg-opacity-90">
        <div className="flex justify-center items-center">
          <button
            className="w-8 h-8 border border-text border-opacity-50 rounded bg-primary bg-opacity-50"
            aria-label="check"
            onClick={() => checkToDo(item.id)}
          >
            {item.completed ? (
              <i className="fa-solid fa-check opacity-90"></i>
            ) : null}
          </button>
        </div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={newToDoText}
              onChange={(e) => setNewToDoText(e.target.value)}
              className="w-full flex justify-center items-center rounded outline-none text-text text-opacity-90 bg-transparent placeholder:text-text placeholder:text-opacity-50"
            />
            <div className="flex justify-center items-center">
              <button
                className="w-8 h-8 border border-text border-opacity-50 rounded bg-secondary bg-opacity-50"
                aria-label="save"
                onClick={handleSave}
              >
                <i className="fa-solid fa-save opacity-90"></i>
              </button>
            </div>
          </>
        ) : (
          <>
            <span
              className={`w-full flex justify-center items-center text-text text-opacity-90 ${
                item.completed ? "line-through" : ""
              }`}
            >
              {item.text}
            </span>
            <div className="flex justify-center items-center">
              <button
                className="w-8 h-8 border border-text border-opacity-50 rounded bg-secondary bg-opacity-50"
                aria-label="edit"
                onClick={handleEdit}
              >
                <i className="fa-solid fa-pen opacity-90"></i>
              </button>
            </div>
          </>
        )}
        <div className="flex justify-center items-center">
          <button
            className="w-8 h-8 border border-text border-opacity-50 rounded bg-delete bg-opacity-50"
            aria-label="delete"
            onClick={() => deleteToDo(item.id)}
          >
            <i className="fa-solid fa-trash opacity-90"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
