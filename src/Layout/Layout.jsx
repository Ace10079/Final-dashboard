import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Sidebar/Header";

const Layout = (user) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header user = {user}/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
