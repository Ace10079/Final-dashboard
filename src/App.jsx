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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<EmailLogin/>}></Route>
        <Route path="/" element={<Layout/>}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
