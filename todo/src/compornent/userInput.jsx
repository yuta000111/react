import React from 'react';

function userInput() {
  return (
    <div className="userInput">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" />
        <input type="button" value="追加" />
      </form>
    </div>
  );
}

export default userInput;
