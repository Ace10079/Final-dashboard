import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { AuthProvider } from './SignUp/AuthContext';
import ProtectedRoute from './SignUp/ProtectedRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmailLogin />} />
          <Route path="/" element={<Layout />}>
            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer"
              element={
                <ProtectedRoute>
                  <Customer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="/solution"
              element={
                <ProtectedRoute>
                  <Solution />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/api"
              element={
                <ProtectedRoute>
                  <API />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;