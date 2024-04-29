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
import Edit from './Customer/Edit';
import View from './Search/View';
import EditSoultion from './Solution/EditSoultion';
import AddDisease from './Solution/AddDisease';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignUp/>}></Route>
        <Route path="/customer_edit" element={<Edit/>}></Route>
        <Route path="/search_view" element={<View/>}></Route>
        <Route path="/disease_edit" element={<EditSoultion/>}></Route>
        <Route path="/add_disease" element={<AddDisease/>}></Route>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Dashboard />} />
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
