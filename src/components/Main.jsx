import Form from "./Form";
import ToDoList from "./ToDoList";

export default function Main() {
  return (
    <main className="max-w-xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-4">
      <Form />
      <ToDoList />
    </main>
  );
}
