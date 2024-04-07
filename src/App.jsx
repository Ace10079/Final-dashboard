import Admin from "./Admin/Admin";
import Customer from "./Customer/Customer";
import Search from "./Search/Search";
import Cards from "./Sidebar/Cards"
import Dashboard from "./Sidebar/Dashboard";
import Header from "./Sidebar/Header"
import Sidebar from "./Sidebar/Sidebar"
import Table1 from "./Sidebar/Table1"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Solution from "./Solution/Solution";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Dashboard/>
    },
    {
      path:"/customer",
      element: <Customer/>
    },
    {
      path:"/search",
      element: <Search/>
    },
    {
      path:"/admin",
      element: <Admin/>
    },
    {
      path:"/solution",
      element: <Solution/>
    }
  ])
    
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
