import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import Dashboard from './Sidebar/Dashboard';
import Admin from './Admin/Admin';
import Customer from './Customer/Customer';
import Search from './Search/Search';
import Solution from './Solution/Solution';
import Layout from './Layout/Layout';
import SignUp from './SignUp/SignUp';
import Account from './Profile/Account';
import EmailLogin from './SignUp/EmailLogin';
import API from '../API.jsx';

function ProtectedRoute({ element }) {
  const token = localStorage.getItem('jwtToken');
  const isAuthenticated = !!token;

  return isAuthenticated ? element : <Navigate to="/" />;
}

function App() {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setEmail(decodedToken.email);
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('jwtToken');
        setToken('');
      }
    }
  }, [token]);

  const handleLogin = (newToken) => {
    localStorage.setItem('jwtToken', newToken);
    setToken(newToken);
    const decodedToken = jwtDecode(newToken);
    setEmail(decodedToken.email);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setToken('');
    setEmail('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailLogin onLogin={handleLogin} />} />
        <Route path="/" element={<Layout user={email} onLogout={handleLogout} />}>
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/customer" element={<ProtectedRoute element={<Customer />} />} />
          <Route path="/search" element={<ProtectedRoute element={<Search />} />} />
          <Route path="/solution" element={<ProtectedRoute element={<Solution />} />} />
          <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Account user={email} />} />} />
          <Route path="/api" element={<ProtectedRoute element={<API />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
