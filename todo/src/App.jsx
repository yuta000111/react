import React, { createContext, useState } from 'react';
import TodoList from './compornent/todoList';
import UserInput from './compornent/userInput';

export const allList = createContext([
  {
    id: '',
    task: '',
    status: false,
    remove: false,
  },
]);

function App() {
  const [tasks, setTasks] = useState(allList);

  const addTasks = ({ task, status, remove }) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, task, status, remove },
    ]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>todo app</h1>
        <allList.Provider value={{ tasks, addTasks }}>
          <TodoList></TodoList>
          <UserInput></UserInput>
        </allList.Provider>
      </header>
    </div>
  );
}

export default App;
