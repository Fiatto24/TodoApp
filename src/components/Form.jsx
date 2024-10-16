import { useState } from "react";

const Form = ({ setTodos }) => {
  const submit = (e) => {
    e.preventDefault();
    const input = e.target[0];
    const value = input.value;

    setTodos((prev) => [...prev, value]);
    input.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
