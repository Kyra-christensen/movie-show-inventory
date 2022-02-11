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
    <Router>
      <div className='App'>
        <header>
          {
            currentUser &&
            <>
              <NavLink exact to="/movies-shows">List</NavLink>
              <NavLink exact to="/create">Create</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                currentUser
                  ? <Redirect to="/movies-shows" />
                  : <AuthPage setCurrentUser={setCurrentUser} />
              }
            </Route>
            <Route exact path="/movies-shows">
              {
                currentUser
                  ? <ListPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/movies-shows/:id">
              {
                currentUser
                  ? <DetailPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/create">
              {
                currentUser
                  ? <CreatePage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
