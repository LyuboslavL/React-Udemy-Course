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
    });
  }

  return (
    <div>
      <AddUser onAddedUser={addedUser} />
      {userInput.length < 1 ? <p style={{ textAlign: 'center' }}>No users added yet.</p> : <UserList users={userInput} />}
    </div>
  );
}

export default App;
