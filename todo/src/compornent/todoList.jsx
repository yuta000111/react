import React, { useContext } from 'react';
import Todo from './todo';
import { allList } from '../App';

function TodoList() {
  const { tasks } = useContext(allList);
  if (!tasks.length) return;
  <div className="TodoList">
    <h2>タスク一覧</h2>
    <p> タスクはまだありません。</p>
  </div>;
  return (
    <div className="TodoList">
      <h2>タスク一覧</h2>
      <ul>
        {tasks.map((taskList) => {
          return <Todo key={taskList.id} {...taskList} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
