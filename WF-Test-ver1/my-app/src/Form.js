// Form.js
import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== "") {
      addTask(taskInput); // Call addTask function passed from parent component
      setTaskInput(""); // Clear input field after submitting task
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task ..."
        value={taskInput}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
