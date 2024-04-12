import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoItems }) {
  return (
    <ul className="w-full flex flex-col justify-center items-center gap-4">
      {toDoItems.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
