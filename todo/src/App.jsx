import React, { createContext, useState } from 'react';
import TodoList from './compornent/todoList';
import UserInput from './compornent/userInput';

export const allList = createContext({
  id: '',
  task: '',
  status: false,
  remove: false,
});

const [tasks, setTasks] = useState(allList);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>todo app</h1>
        <allList.Provider>
          <TodoList></TodoList>
          <UserInput></UserInput>
        </allList.Provider>
      </header>
    </div>
  );
}

export default App;
