import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';


function App() {
  const [userInput, setResult] = useState(null);

  const addedUser = (user) => {
    setResult(user);
  }

  return (
    <div>
      <AddUser onAddedUser={addedUser} />
      {!userInput && <p style={{ textAlign: 'center' }}>No users added yet.</p>}
      {userInput && <UserList data={userInput} />}
    </div>
  );
}

export default App;
