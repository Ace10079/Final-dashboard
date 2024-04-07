import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Table4 from './Table4'
import Header from '../Sidebar/Header'

function Admin() {
  return (
    <div className="flex">
    <div>
      <Sidebar/>
    </div>
    <div className="w-full">
        <Header/>
     <Table4/> 
    </div>
  </div>
  )
}

export default Admin
