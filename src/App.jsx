import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState(["ทำงาน", "ซักผ้า"]);

  return (
    <>
      <Form setTodos={setTodos} />
      {todos.toString()}
    </>
  );
}

export default App;
