export default function ToDoItem({ item, checkToDo, deleteToDo }) {
  return (
    <li className="w-full p-px rounded bg-gradient-to-r from-primary to-secondary">
      <div className="w-full p-4 flex justify-between items-center rounded bg-bg bg-opacity-90">
        <div className="flex justify-between items-center">
          <button
            className="w-8 h-8 border rounded bg-primary"
            aria-label="check"
            onClick={() => checkToDo(item.id)}
          >
            {item.completed ? <i className="fa-solid fa-check"></i> : null}
          </button>
        </div>
        <span className="">{item.text}</span>
        <div className="flex justify-center items-center gap-4">
          <button
            className="w-8 h-8 border rounded bg-secondary"
            aria-label="edit"
          >
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            className="w-8 h-8 border rounded bg-delete"
            aria-label="delete"
            onClick={() => deleteToDo(item.id)}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
