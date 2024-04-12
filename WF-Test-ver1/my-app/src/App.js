import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import "./styles.css"

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Load tasks from localStorage or use default tasks if not available
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, title: "Build some websites", expirationDate: "2024-04-15", done: false },
    { id: 2, title: "Do exercises", expirationDate: "2024-04-18", done: false },
    { id: 3, title: "Go shopping", expirationDate: "2024-04-20", done: false },
    { id: 4, title: "House cleaning", expirationDate: "2024-04-10", done: true }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [showOnlyNotFinished, setShowOnlyNotFinished] = useState(false);

  useEffect(() => {
    // Save tasks to localStorage whenever it changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setShowOnlyNotFinished(searchParams.get("withDone") !== "1");
  }, [location.search]);

  const toggleShowOnlyNotFinished = () => {
    setShowOnlyNotFinished(!showOnlyNotFinished);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("withDone", showOnlyNotFinished ? "1" : "0");
    navigate(`?${searchParams.toString()}`);
  };

  const addTask = (title, expirationDate) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      expirationDate,
      done: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    ));
  };

  const filteredTasks = showOnlyNotFinished ? tasks.filter(task => !task.done) : tasks;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );

  function Home() {
    return (
      <div className="App">
        <div className="container">
          <TodoListHeader
            count={tasks.filter(task => !task.done).length}
            showOnlyNotFinished={showOnlyNotFinished}
            toggleShowOnlyNotFinished={toggleShowOnlyNotFinished}
          />
          <TodoList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} />
          <Form addTask={addTask} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
