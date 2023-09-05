import React from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';


function App() {
  const addedUser = (userInput) => {
    console.log(userInput);
  }

  return (
    <div>
      <AddUser onAddedUser={addedUser} />
    </div>
  );
}

export default App;
