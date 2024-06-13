import React from 'react';

const Buttons = () => (
  <div className="container">
    <button className="yellow-button">Task Progress
      <img src="public/Time.svg" alt="icon" />
    </button>
    <button className="green-button">Task Completed
      <img src="public/Done1.svg" alt="icon" />
    </button>
    <button className="red-button">Task Won't Do
      <img src="public/close.svg" alt="icon" />
    </button>
    <button className="gray-button">Task To Do</button>
    <button className="orange-button">Add new task
      <img src="public/Add.svg" alt="icon" />
    </button>
  </div>
);

export default Buttons;
