import React, { createContext, useState } from 'react';
import TodoList from './compornent/todoList';
import UserInput from './compornent/userInput';

const baseTask = [
  {
    id: 1,
    task: 'このように表示されます',
    status: false,
    remove: false,
  },
];

export const allList = createContext(baseTask);

function App({ children }) {
  console.log(children);
  const [tasks, setTasks] = useState(allList._currentValue);

  const addTasks = (task, status, remove) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: task,
        status: status,
        remove: remove,
      },
    ]);
  };
  const removeTask = ({ removeId }) => {
    tasks.filter((task) => {
      task.id !== removeId;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>todo app</h1>
        <allList.Provider
          value={{ tasks, addTasks, removeTask }}>
          <UserInput />
          <TodoList />
        </allList.Provider>
      </header>
    </div>
  );
}

export default App;
