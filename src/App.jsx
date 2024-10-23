import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import EditTodoFrom from "./components/EditTodoFrom";

function App() {
  const [todos, setTodos, editTodo] = useState([]);
  const deleteTodo = (todo) => {
    const updeteTOdo = todos.filter(el => el !== todo); 
    
  };
      
  

  return (
    <div className="container-sm my-5">
      <div
       className="d-flex justify-content-center align-items-center m-auto flex-column " 
      style={{minHeight: "100dvh"}} 
      >
      <div className="col-md-6 col-12 text-center">
      <h1 className="mb-3">Todo List</h1>

      <Form setTodos={setTodos} />

      <div className="d-flex flex-column gap-2 ">
      {todos.length > 0 ? todos.map((item, idx) => <Todo data={item}
       deleteTodo={deleteTodo} key={idx}  editTodo={editTodo} />) //แก้ไช
      : "ไม่พบข้อมูล"}
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
