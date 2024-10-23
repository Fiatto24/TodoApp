import { Button, InputGroup } from "react-bootstrap";
import { Form as FormBootstrap } from "react-bootstrap";

const Form = ({ setTodos }) => {
  const submit = (e) => {
    e.preventDefault();
    const input = e.target[0];
    const value = input.value;

    setTodos((prev) => [...prev, value]);
    input.value = "";
  };

  return (
    <form onSubmit={submit} className="w-100">
<InputGroup className="mb-3">
        <FormBootstrap.Control
          placeholder="Enter a new todo"
          aria-label="Enter a new todo"
        />
        <Button variant="primary" type = "submit"> Add Todo </Button>
      </InputGroup>
    </form>
  );
};

export default Form;
