export default function ToDoItem() {
  return (
    <li className="w-full p-4 flex justify-between items-center border rounded">
      <div className="flex justify-between items-center">
        <button className="w-8 h-8 border rounded" aria-label="check">
          <i class="fa-solid fa-check"></i>
        </button>
      </div>
      <span className="">ToDoItem</span>
      <div className="flex justify-center items-center gap-4">
        <button className="w-8 h-8 border rounded" aria-label="edit">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button className="w-8 h-8 border rounded" aria-label="delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}