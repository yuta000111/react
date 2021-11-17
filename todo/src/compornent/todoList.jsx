import React, { useContext } from 'react';
import { allList } from '../App';
import Todo from './todo';

function TodoList() {
  const { newLists } = useContext(allList);
  if (!newLists.length) return;
  <div className="TodoList">
    <h2>タスク一覧</h2>
  </div>;
  return (
    <div className="TodoList">
      <h2>タスク一覧</h2>
      <ul>
        {newLists.map((newList) => {
          <Todo key={newList.id} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
