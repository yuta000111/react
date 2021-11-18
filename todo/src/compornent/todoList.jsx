import React, { useContext } from 'react';
// import Todo from './todo';
import { allList } from '../App';

function TodoList() {
  const { tasks } = useContext(allList);
  console.log(tasks);
  return <p>テスト</p>;
  // if (!tasks.length) return;
  // <div className="TodoList">
  //   <h2>タスク一覧</h2>
  //   <p> タスクはまだありません。</p>
  // </div>;
  // return (
  //   <div className="TodoList">
  //     <h2>タスク一覧</h2>
  //     <ul>
  //       {tasks.map((newList) => {
  //         <Todo key={newList.id} />;
  //       })}
  //     </ul>
  //   </div>
  // );
}

export default TodoList;
