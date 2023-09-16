import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';


function App() {
  const [userInput, setResult] = useState([]);

  const addedUser = (user) => {
    setResult((prevUsers) => {
      const updatedUsersList = [...prevUsers];
      updatedUsersList.unshift(user);
      return updatedUsersList;

      // Alternative way with less code lines
      // return [...prevUsers, {username: user.username, age: user.age}]
    });
  }

  return (
    <>
      <AddUser onAddedUser={addedUser} />
      {userInput.length < 1 ? <p style={{ textAlign: 'center' }}>No users added yet.</p> : <UserList users={userInput} />}
    </>
  );
}

export default App;
