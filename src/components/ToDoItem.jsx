export default function ToDoItem({ item, checkToDo, deleteToDo }) {
  return (
    <li
      className={`w-full p-px rounded bg-gradient-to-r from-primary to-secondary ${
        item.completed ? "opacity-50" : ""
      }`}
    >
      <div className="w-full p-4 flex justify-between items-center rounded bg-bg bg-opacity-90">
        <div className="flex justify-between items-center">
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
        <span
          className={`text-text text-opacity-90 ${
            item.completed ? "line-through" : ""
          }`}
        >
          {item.text}
        </span>
        <div className="flex justify-center items-center gap-4">
          <button
            className="w-8 h-8 border border-text border-opacity-50 rounded bg-secondary bg-opacity-50"
            aria-label="edit"
          >
            <i class="fa-solid fa-pen opacity-90"></i>
          </button>
          <button
            className="w-8 h-8 border border-text border-opacity-50 rounded bg-delete bg-opacity-50"
            aria-label="delete"
            onClick={() => deleteToDo(item.id)}
          >
            <i class="fa-solid fa-trash opacity-90"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
