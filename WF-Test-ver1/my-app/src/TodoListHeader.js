// TodoListHeader.js
import React from "react";

const TodoListHeader = ({ count, showOnlyNotFinished, toggleShowOnlyNotFinished }) => {
  return (
    <div className="header">
      <div>
        <input
          type="checkbox"
          id="showOnlyNotFinished"
          checked={showOnlyNotFinished}
          onChange={toggleShowOnlyNotFinished}
        />
        <label htmlFor="showOnlyNotFinished">Not finished only</label>
      </div>
      <div>You have {count} tasks left!</div>
    </div>
  );
};

export default TodoListHeader;
