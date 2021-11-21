import React from 'react';

export default function Todo({ id, task, remove, status }) {
  console.log(id, task, remove, status);
  return (
    <li>
      <div className="list">
        <p>taskid:{id}</p>
        <p>tasks:{task}</p>
        <label>
          削除
          <input type="checkbox" value={remove} />
        </label>
        <label>
          完了
          <input type="checkbox" value={status} />
        </label>
      </div>
    </li>
  );
}
