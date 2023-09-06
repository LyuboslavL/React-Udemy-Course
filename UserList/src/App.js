import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';


function App() {
  // const [userInput, setResult] = useState(null);
  let userInfo = [];

  const addedUser = (userInput) => {
    userInfo.push(userInput);
  }

  return (
    <div>
      <AddUser onAddedUser={addedUser} />
      <UserList data={userInfo} />
    </div>
  );
}

export default App;
