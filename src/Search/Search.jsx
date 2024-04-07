import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Sidebar/Header'
import Table3 from './Table3'

function Search() {
  return (
    <div>
       <div className="flex">
        <div>
          <Sidebar/>
        </div>
        <div className="w-full">
          <Header/>
         <Table3/> 
        </div>
      </div>
    </div>
  )
}

export default Search
