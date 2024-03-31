import Form from "./Form";
import ToDoList from "./ToDoList";

export default function Main() {
  return (
    <main className="w-full p-4 flex flex-1 flex-col justify-center items-center">
      <Form />
      <ToDoList />
    </main>
  );
}
