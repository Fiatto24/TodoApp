import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(["ทำงาน", "ซักผ้า"]);

  return (
    <>
      <Form setTodos={setTodos} />
      {todos.length > 0 ? todos.map((item, idx) => <Todo data={item} key={idx} />) : "ไม่พบข้อมูล"}
    </>
  );
}

export default App;
