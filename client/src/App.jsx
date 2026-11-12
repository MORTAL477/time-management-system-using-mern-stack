import { useState } from 'react';
import Auth from './components/Auth.jsx';
import Dashboard from './components/Dashboard.jsx';

export default function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('user')); } catch { return null; }
  });

  const onAuth = ({ token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return user ? <Dashboard user={user} onLogout={logout} /> : <Auth onAuth={onAuth} />;
}
