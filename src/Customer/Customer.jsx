import React from 'react'
import Table2 from './Table2'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Sidebar/Header'

function Customer() {
  return (
    <div className="flex">
        <div>
          <Sidebar/>
        </div>
        <div className="w-full">
          <Header/>
         <Table2/> 
        </div>
      </div>
  )
}

export default Customer
