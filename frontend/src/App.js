import React, { useState } from 'react';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));

  return loggedIn ? (
    <TodoPage logout={() => {
      localStorage.removeItem('token');
      setLoggedIn(null);
    }} />
  ) : (
    <LoginPage onLogin={() => setLoggedIn(true)} />
  );
}

export default App;
