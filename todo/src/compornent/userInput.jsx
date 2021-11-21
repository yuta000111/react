import React, { useState, useContext } from 'react';
import { allList } from '../App';

function userInput() {
  const { addTasks } = useContext(allList);
  const [task, setTask] = useState('');
  const [status, setStatus] = useState(false);
  const [remove, setRemove] = useState(false);
  const submitTask = (e) => {
    e.preventDefault();
    addTasks(task, status, remove);
  };

  return (
    <div className="userInput">
      <form id="app" onSubmit={submitTask}>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <input
          type="checkbox"
          value={status}
          onChange={(event) => {
            setStatus(event.target.checked);
          }}
        />
        <input
          type="checkbox"
          value={remove}
          onChange={(event) => {
            setRemove(event.target.checked);
          }}
        />
        <input type="submit" value="追加" form="app" />
      </form>
    </div>
  );
}

export default userInput;
