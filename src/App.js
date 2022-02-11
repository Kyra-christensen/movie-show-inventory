import './App.css';
import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import { logout } from './services/fetch-utils';

export default function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function fetch() {
      const user = getUser();
      setCurrentUser(user);
    }
    fetch();
  }, []);

  async function handleLogout() {
    await logout();
    setCurrentUser('');
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
