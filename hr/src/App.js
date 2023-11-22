import './App.css';
import Login from './Pages/Login/Login';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
