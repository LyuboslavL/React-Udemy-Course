import React, { useState, useEffect } from 'react';

import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.length > 0) {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    sessionStorage.setItem('email', email);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
