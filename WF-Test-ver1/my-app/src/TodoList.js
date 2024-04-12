import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";


const TodoList = ({ tasks, toggleTaskStatus }) => {
  const calculateDaysLeft = (expirationDate) => {
    const today = new Date();
    const due = new Date(expirationDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="todo-list-container">
      {tasks.map(task => (
        <div className={`todo-item-container ${task.done ? "done" : ""}`} key={task.id}>
          {task.done ? (
            <FaRegCheckCircle color="#9a9a9a" className="item-done-button" onClick={() => toggleTaskStatus(task.id)} />
          ) : (
            <FaRegCircle color="#9a9a9a" className="item-done-button" onClick={() => toggleTaskStatus(task.id)} />
          )}
          <div className="item-title">{task.title}</div>
          <div className={`item-due ${calculateDaysLeft(task.expirationDate) <= 3 ? "highlight" : ""}`}>
            --- {calculateDaysLeft(task.expirationDate)} days left
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
