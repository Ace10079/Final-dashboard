import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Cards from './Cards'
import Table1 from './Table1'

function Dashboard() {
  return (
    <div className="flex">
    <div>
      <Sidebar/>
    </div>
    <div className="w-full">
      <Header/>
     <Cards/>
     <Table1/> 
    </div>
  </div>
  )
}

export default Dashboard
