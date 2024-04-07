import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Sidebar/Header'
import Table5 from './Table5'

function Solution() {
  return (
    <div>
       <div className="flex">
    <div>
      <Sidebar/>
    </div>
    <div className="w-full">
      <Header/>
     <Table5/> 
    </div>
  </div>
    </div>
  )
}

export default Solution
