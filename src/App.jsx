import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Sidebar/Header';
import Dashboard from './Sidebar/Dashboard';
import Admin from './Admin/Admin';
import Customer from './Customer/Customer';
import Search from './Search/Search';
import Solution from './Solution/Solution';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<SignUp />} />
          <Route path='/*' element={<MainContentWithSidebarAndHeader />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainContentWithSidebarAndHeader() {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
